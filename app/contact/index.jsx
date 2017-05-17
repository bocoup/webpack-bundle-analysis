import React, {Component} from 'react';

class Contact extends Component {
  render() {
    return (
      <div id="contact" class="container">
        <div class="major">
          <h2>Get in touch</h2>
          <span class="byline">Phasellus nec erat sit amet nibh pellentesque congue</span>
        </div>
        <ul class="contact">
          <li><a href="#" class="icon icon-twitter"><span>Twitter</span></a></li>
          <li><a href="#" class="icon icon-facebook"><span></span></a></li>
          <li><a href="#" class="icon icon-dribbble"><span>Pinterest</span></a></li>
          <li><a href="#" class="icon icon-tumblr"><span>Google+</span></a></li>
          <li><a href="#" class="icon icon-rss"><span>Pinterest</span></a></li>
        </ul>
      </div>
    )
  }
}

export default Contact;