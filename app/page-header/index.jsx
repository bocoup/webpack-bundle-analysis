import React, {Component} from 'react';
import './static/logo.css';

class PageHeader extends Component {
  render() {
    return (
      <div id="logo" className="container">
        <h1><a href="#" className="icon icon-tasks"><span>{this.props.title}</span></a></h1>
      </div>
    )
  }
}

export default PageHeader;
