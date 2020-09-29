import React, { Component } from "react";
import me from "../me.jpg";
import resume from "../April-Craig-Resume.pdf";

class About extends Component {
  render() {
    return (
      <div class="container-fluid mb-5">
        <h1 class="mt-5" id="about">
          <i class="fas fa-address-card"></i>About Me
        </h1>
        <div class="row mt-5">
          <div class="col-md-6">
            <p class="text">
              Hi! My name is April. I am a Software Engineer who unexpectantly
              fell in love with the world of web development after working as an
              English as a Second Language teacher for over 6 years.
            </p>
            <p class="text">
              I enjoy building responsive, visually appealling applications.
              When I'm not scrolling through code, you can find me writing
              articles on
              <a
                href="https://dev.to/april_craig"
                id="article"
                target="_blank"
                class="ml-1 mr-1"
              >
                
                Dev.to
              </a>
              or scrolling through
              <a class="ml-1"
                id="cats"
                href="https://www.instagram.com/explore/tags/catsofinstagram/?hl=en"
                target="_blank"
              >
                #catsofinstagram
              </a>
              .
            </p>

            
            <p class="text">
              You can download my resume 
              <a class="ml-1"
                id="downloadBtn" href={resume} download="">
              here!</a>
            </p>
          </div>
          <div class="col-md-6">
            <img class="img-thumbnail image" src={me} />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
