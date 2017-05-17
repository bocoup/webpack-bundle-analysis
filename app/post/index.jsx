import '../../static/default.css';

// Render the top-level React component
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Navigation from '../navigation/index.jsx';
import PageHeader from '../page-header/index.jsx';
import Banner from '../banner/index.jsx';
import Footer from '../footer/index.jsx';

class Post extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <PageHeader />
        <Banner />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Post />, document.getElementById('react-root'));
