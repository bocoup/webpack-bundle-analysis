import React, {Component} from 'react';
import './static/portfolio.css';
import Img1 from './static/pic01.jpg';
import Img2 from './static/pic02.jpg';
import Img3 from './static/pic03.jpg';
import Img4 from './static/pic04.jpg';

class PortfolioList extends Component {
  render() {
    return (
      <div id="portfolio-wrapper">
        <div id="portfolio" class="container">
          <div class="major">
            <h2>Suspendisse lacus turpis</h2>
            <span class="byline">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</span>
          </div>
          <div class="column1">
            <a href="#" class="image image-full"><img src={Img1} height="150" alt="" /></a>
            <div class="box">
              <p>Etiam non felis. Donec ut ante. In id eros. Suspendisse lacus turpis, cursus egestas at sem. Mauris quam enim, molestie.</p>
              <a href="#" class="button">Read More</a>
            </div>
          </div>
          <div class="column2">
            <a href="#" class="image image-full"><img src={Img2} height="150" alt="" /></a>
            <div class="box">
              <p>Etiam non felis. Donec ut ante. In id eros. Suspendisse lacus turpis, cursus egestas at sem. Mauris quam enim, molestie.</p>
              <a href="#" class="button">Read More</a>
            </div>
          </div>
          <div class="column3">
            <a href="#" class="image image-full"><img src={Img3} height="150" alt="" /></a>
            <div class="box">
              <p>Etiam non felis. Donec ut ante. In id eros. Suspendisse lacus turpis, cursus egestas at sem. Mauris quam enim, molestie.</p>
              <a href="#" class="button">Read More</a>
            </div>
          </div>
          <div class="column4">
            <a href="#" class="image image-full"><img src={Img4} height="150" alt="" /></a>
            <div class="box">
              <p>Etiam non felis. Donec ut ante. In id eros. Suspendisse lacus turpis, cursus egestas at sem. Mauris quam enim, molestie.</p>
              <a href="#" class="button">Read More</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PortfolioList;
