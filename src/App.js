import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {

  apiKey=process.env.REACT_APP_NEWS_API;

  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<News apiKey={this.apiKey} key="general" category="general" />}/>
          <Route path="/business" element={<News apiKey={this.apiKey} key="business" category="business" />}/>
          <Route path="/entertainment" element={<News apiKey={this.apiKey} key="entertainment" category="entertainment" />}/>
          <Route path="/health" element={<News apiKey={this.apiKey} key="health" category="health" />}/>
          <Route path="/sports" element={<News apiKey={this.apiKey} key="sports" category="sports" />}/>
          <Route path="/science" element={<News apiKey={this.apiKey} key="science" category="science" />}/>
          <Route path="/technology" element={<News apiKey={this.apiKey} key="technology" category="technology" />}/>
        </Routes>
        </BrowserRouter>
      </div>
    );
  }
}



