import './css/baz.css';
import '../../static/default.css';

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import PortfolioList from '../portfolio-list/index.jsx';

ReactDOM.render(<PortfolioList />, document.getElementById('react-root'));
