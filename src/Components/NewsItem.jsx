import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl } = this.props;
    //in class based component we pass props as above

    return (
      <div className="my-3">
        <div className="card" >
          <img src={!imgUrl ? "https://www.telegraph.co.uk/content/dam/global-health/2022/12/22/TELEMMGLPICT000320367812_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpeg?impolicy=logo-overlay":imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}..</h5>
            <p className="card-text">{description}...</p>
            <a
              href={newsUrl}
              target="_blanck"
              className="btn btn-sm btn-primary"
            >
              Read more
            </a>
          </div> 
        </div>
      </div>
    );
  }
}

// target="_blanck" for opening link into new window
