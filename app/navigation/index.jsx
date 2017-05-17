import React, {Component} from 'react';
import './static/nav.css';


class Navigation extends Component {
  render() {
    return (
      <header id="header">
        <nav id="menu" class="container">
          <ul>
            <li class="current_page_item"><a href="#" accesskey="1" title="">Homepage</a></li>
            <li><a href="#" accesskey="2" title="">Gallery</a></li>
            <li><a href="#" accesskey="5" title="">Contact Us</a></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Navigation;
