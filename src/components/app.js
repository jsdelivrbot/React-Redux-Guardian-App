import React, { Component } from 'react'
import SearchBar from './search_bar'
import News from './news/news'
import Searched from './searched/searched'



export default class App extends Component {
  render() {
    return (

      <div>
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2">
            <br /><br />
            <SearchBar />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-3">
            <Searched />
          </div>
          <div className="col-xs-12 col-sm-9">
            <News />
          </div>
        </div>

      </div>


    );
  }
}
