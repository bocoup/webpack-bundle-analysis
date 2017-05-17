import React, {Component} from 'react';

class IconBanner extends Component {
  render() {
    return (
      <div id="featured-wrapper">
        <div id="featured" class="container">
          <div class="major">
            <h2>Maecenas lectus sapien</h2>
            <span class="byline">Cras vitae metus aliquam risus pellentesque pharetra</span>
          </div>
          <div class="column1">
            <span class="icon icon-bar-chart"></span>
            <div class="title">
              <h2>Maecenas lectus sapien</h2>
              <span class="byline">Integer sit amet aliquet pretium</span>
            </div>
          </div>
          <div class="column2">
            <span class="icon icon-qrcode"></span>
            <div class="title">
              <h2>Praesent scelerisque</h2>
              <span class="byline">Integer sit amet aliquet pretium</span>
            </div>
          </div>
          <div class="column3">
            <span class="icon icon-building"></span>
            <div class="title">
              <h2>Fusce ultrices fringilla</h2>
              <span class="byline">Integer sit amet aliquet pretium</span>
            </div>
          </div>
          <div class="column4">
            <span class="icon icon-picture"></span>
            <div class="title">
              <h2>Etiam posuere augue</h2>
              <span class="byline">Integer sit amet aliquet pretium</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default IconBanner;