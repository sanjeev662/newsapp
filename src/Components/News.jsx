import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types'

export default class News extends Component {

  static defaultProps={
    country:'in',
    category:'general',
    pageSize:12,
  }

  static propTypes={
    country:PropTypes.string,
    category:PropTypes.string,
    pageSize:PropTypes.number,
    apiKey:PropTypes.string,
  }


  constructor() {
    super();
    this.state = {
      articles: [], 
      loading: false,
      page: 1
    };
  }

  updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
      this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json(); 
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  };

  componentDidMount = async () => {
    this.updateNews();
  };

  handleNextClick = async () => {
    this.setState({page:this.state.page+1});
    this.updateNews();
  };

  handlePrevClick = async () => {
    this.setState({page:this.state.page-1});
    this.updateNews();

  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center" style={{margin:'35px 0px'}}>Top HeadLines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 40) : ""}
                  description={
                    element.description ? element.description.slice(0, 90) : ""
                  }
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            onClick={this.handlePrevClick}
            className="btn btn-dark"
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 12)
            }
            onClick={this.handleNextClick}
            className="btn btn-dark"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

//.slice function of js which cut the size of string to given range.

//firstly constructor works then render then componentdidmount
//if we remove constructor there no value for map function in render to execute hence show error
