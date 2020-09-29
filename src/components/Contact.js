import React, { Component } from "react";
import resume from "../April-Craig-Resume.pdf";


class Contact extends Component {
  render() {
    return (
      <div class="container-fluid mb-5">
        <h1 class="mt-5" id="contact">
          <i class="fas fa-envelope"></i>Contact Me
        </h1>

        <div className="row text-center">
          <div className="col-md-6 pt-4 pb-5">
            <p className="info">April Craig</p>
            <p className="info">(980) 202-9032</p>
            <p className="info">aprilacraig1@gmail.com</p>
            <div>
              <a
                href="https://www.linkedin.com/in/april-craig-dev"
                target="_blank"
                data-toggle="tooltip"
                data-placement="top"
                title="LinkedIn"
              >
                <i class="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/aprila13/"
                target="_blank"
                data-toggle="tooltip"
                data-placement="top"
                title="Github"
              >
                <i class="fab fa-github"></i>
              </a>
              <a href={resume} download="">
                <button
                  type="button"
                  name="button"
                  class="btn btn-secondary btn-color mb-3 ml-2"
                >
                  Download Resume
                </button>
              </a>
            </div>
          </div>

          <div className="col-md-6 pt-4">
            <form name="contact" method="post">
              <input type="hidden" name="form-name" value="contact" />

              <div className="form-group">
                <p>
                  <label for="name">
                    Name:
                    <input className="form-control" type="text" name="name" />
                  </label>
                </p>
              </div>

              <div className="form-group">
                <p>
                  <label for="email">
                    Email:
                    <input className="form-control" type="email" name="email" />
                  </label>
                </p>
              </div>

              <div className="form-group">
                <p>
                  <label for="phone">
                    Phone:
                    <input className="form-control" type="tel" name="phone" />
                  </label>
                </p>
              </div>

              <div className="form-group">
                <p>
                  <label for="message">
                    Message:
                    <textarea
                      className="form-control"
                      name="message"
                    ></textarea>
                  </label>
                </p>
              </div>

              <a href="#" class="">
                <button type="submit" class="btn btn-secondary btn-color">
                  Send
                </button>
              </a>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
