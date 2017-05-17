import React, {Component} from 'react';
import BannerImg from './static/pic05.jpg';

class Banner extends Component {
  render() {
    return (
      <div id="page" class="container">
        <div id="content">
          <div class="title">
            <h2>Welcome to our website</h2>
            <span class="byline">Mauris vulputate dolor sit amet nibh</span>
          </div>
          <p>This is <strong>TwoColours</strong>, a free, fully standards-compliant CSS template designed by <a href="http://templated.co" rel="nofollow">TEMPLATED</a>. The photos in this template are from <a href="http://fotogrph.com/"> Fotogrph</a>. This free template is released under the <a href="http://templated.co/license">Creative Commons Attribution</a> license, so you're pretty much free to do whatever you want with it (even use it commercially) provided you give us credit for it. Have fun :) </p>
        </div>
        <div id="sidebar"><a href="#" class="image image-full"><img src={BannerImg} alt="" /></a></div>
      </div>
    )
  }
}

export default Banner;
