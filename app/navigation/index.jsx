import React, {Component} from 'react';
import './static/nav.css';


class Navigation extends Component {
  render() {
    return (
      <header id="header">
        <div id="menu" className="container">
          <ul>
            <li className="current_page_item"><a href="index.html" title="">Homepage</a></li>
            <li><a href="post.html" title="">Post</a></li>
            <li><a href="portfolio.html" title="">Portfolio</a></li>
          </ul>
        </div>
      </header>
    )
  }
}

export default Navigation;
