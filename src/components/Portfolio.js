import React, { Component } from "react";
import Dictionary from "../Dictionary.png";
import NYTAPI from "../NYTAPI.png";
import SoundMachine from "../SoundMachine.png";
import GoodLooks from "../GoodLooks.png";
import Rock from "../Rock.png";
import LoanCalc from "../LoanCalc.png";
import PortfolioPage from "../PortfolioPage.png";
import TempApi from "../TempApi.png";
import TempConverter from "../TempConverter.png";
import Landing from "../landing.png";

class Porfolio extends Component {
  render() {
    return (
      <div class="container-fluid mt-5 mb-3" id="porfolio">
        <h1 class="mt-5" id="portfolio">
          <i class="fas fa-code-branch"></i>Portfolio
        </h1>

        <div className="row">
          <div className="col-md-6 pb-2">
            <div className="card">
              <img
                src={PortfolioPage}
                class="img-thumbnail border-0"
                alt="react portfolio"
              />
              <div class="card-body">
                <h5 class="card-title text-center">React Portfolio Page</h5>
                <p class="card-text text-center">
                  HTML | CSS | REACT | REACT Bootstrap
                </p>
                <div class="btn-group-sm text-center" role="group">
                  <a
                    href="https://github.com/aprila13/react-portfolio"
                    target="_blank"
                  >
                    <button type="button" class="btn mr-1 btn-color">
                      View Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 pb-2">
            <div className="card">
              <img
                src={Landing}
                class="img-thumbnail border-0"
                alt="video landing page"
              />
              <div class="card-body">
                <h5 class="card-title text-center">Video Landing Page</h5>
                <p class="card-text text-center">HTML | CSS</p>
                <div class="btn-group-sm text-center" role="group">
                  <a href="https://video-landing.aprilcraig.dev/" target="_blank">
                    <button type="button" class="btn mr-1 btn-color">
                      Live Site
                    </button>
                  </a>
                  <a
                    href="https://github.com/aprila13/Video-Landing-Page"
                    target="_blank"
                  >
                    <button type="button" class="btn btn-secondary btn-color">
                      View Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 pb-2">
            <div className="card">
              <img
                src={TempApi}
                class="img-thumbnail border-0"
                alt="weather app"
              />
              <div class="card-body">
                <h5 class="card-title text-center">Weather App</h5>
                <p class="card-text text-center">
                  HTML | CSS | Bootstrap | Javascript | Open Weather API | Local
                  Storage
                </p>
                <div class="btn-group-sm text-center" role="group">
                  <a href="https://weatherapi.aprilcraig.dev/" target="_blank">
                    <button type="button" class="btn mr-1 btn-color">
                      Live Site
                    </button>
                  </a>

                  <a
                    href="https://github.com/aprila13/Weather-API"
                    target="_blank"
                  >
                    <button type="button" class="btn mr-1 btn-color">
                      View Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 pb-2">
            <div className="card">
              <img
                src={Dictionary}
                class="img-thumbnail border-0"
                alt="dictionary app"
              />
              <div class="card-body">
                <h5 class="card-title text-center">
                  Merriam-Webster Dictionary Clone
                </h5>
                <p class="card-text text-center">
                  HTML | CSS | JavaScript | Merriam-Webster API
                </p>
                <div class="btn-group-sm text-center" role="group">
                  <a
                    href="https://dictionary-clone.aprilcraig.dev/index.html"
                    target="_blank"
                  >
                    <button type="button" class="btn mr-1 btn-color">
                      Live Site
                    </button>
                  </a>
                  <a
                    href="https://github.com/aprila13/My-Dictionary"
                    target="_blank"
                  >
                    <button type="button" class="btn btn-secondary btn-color">
                      View Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 pb-2">
            <div className="card">
              <img
                src={LoanCalc}
                class="img-thumbnail border-0"
                alt="Loan Calculator"
              />
              <div class="card-body">
                <h5 class="card-title text-center">Loan Calculator</h5>
                <p class="card-text text-center">
                  HTML | CSS | Bootstrap | JavaScript
                </p>
                <div class="btn-group-sm text-center" role="group">
                  <a href="https://loancalc.aprilcraig.dev/" target="_blank">
                    <button type="button" class="btn mr-1 btn-color">
                      Live Site
                    </button>
                  </a>

                  <a
                    href="https://github.com/aprila13/Loan-Calculator"
                    target="_blank"
                  >
                    <button type="button" class="btn mr-1 btn-color">
                      View Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 pb-2">
            <div className="card">
              <img
                src={TempConverter}
                class="img-thumbnail border-0"
                alt="temperature converter"
              />
              <div class="card-body">
                <h5 class="card-title text-center">Temperature Converter</h5>
                <p class="card-text text-center">HTML | CSS | JavaScript</p>
                <div class="btn-group-sm text-center" role="group">
                  <a href="https://tempconvert.aprilcraig.dev/" target="_blank">
                    <button type="button" class="btn mr-1 btn-color">
                      Live Site
                    </button>
                  </a>

                  <a
                    href="https://github.com/aprila13/Temperature-Converter"
                    target="_blank"
                  >
                    <button type="button" class="btn mr-1 btn-color">
                      View Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 pb-2">
            <div className="card">
              <img
                src={Rock}
                class="img-thumbnail border-0"
                alt="Rock, Paper, Scissors"
              />
              <div class="card-body">
                <h5 class="card-title text-center">Rock, Paper, Scissors</h5>
                <p class="card-text text-center">HTML | CSS | JavaScript</p>
                <div class="btn-group-sm text-center" role="group">
                  <a href="https://rps-game.aprilcraig.dev/" target="_blank">
                    <button type="button" class="btn mr-1 btn-color">
                      Live Site
                    </button>
                  </a>
                  <a
                    href="https://github.com/aprila13/rock-paper-scissors"
                    target="_blank"
                  >
                    <button type="button" class="btn btn-secondary btn-color">
                      View Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 pb-2">
            <div className="card">
              <img
                src={SoundMachine}
                class="img-thumbnail border-0"
                alt="Sound Machine"
              />
              <div class="card-body">
                <h5 class="card-title text-center">Sound Machine</h5>
                <p class="card-text text-center">HTML | CSS | JavaScript</p>
                <div class="btn-group-sm text-center" role="group">
                  <a
                    href="https://soundmachine.aprilcraig.dev/"
                    target="_blank"
                  >
                    <button type="button" class="btn mr-1 btn-color">
                      Live Site
                    </button>
                  </a>
                  <a
                    href="https://github.com/aprila13/sound-machine"
                    target="_blank"
                  >
                    <button type="button" class="btn btn-secondary btn-color">
                      View Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 pb-2">
            <div className="card">
              <img
                src={GoodLooks}
                class=" img-thumbnail border-0"
                alt="Good Looks Design"
              />
              <div class="card-body">
                <h5 class="card-title text-center">Good Looks Design</h5>
                <p class="card-text text-center">
                  HTML | CSS | Bootstrap | JavaScript
                </p>
                <div class="btn-group-sm text-center" role="group">
                  <a href="https://goodlooks.aprilcraig.dev/" target="_blank">
                    <button type="button" class="btn mr-1 btn-color">
                      Live Site
                    </button>
                  </a>

                  <a
                    href="https://github.com/aprila13/Good-Looks-Skincare"
                    target="_blank"
                  >
                    <button type="button" class="btn mr-1 btn-color">
                      View Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 pb-2">
            <div className="card">
              <img
                src={NYTAPI}
                class="img-thumbnail border-0"
                alt="New York Times Clone"
              />
              <div class="card-body">
                <h5 class="card-title text-center">New York Times Clone</h5>
                <p class="card-text text-center">
                  HTML | CSS | Bootstrap | Javascript | NYT API
                </p>
                <div class="btn-group-sm text-center" role="group">
                  <a href="https://nytapi.aprilcraig.dev/" target="_blank">
                    <button type="button" class="btn mr-1 btn-color">
                      Live Site
                    </button>
                  </a>

                  <a href="https://github.com/aprila13/NYT-API" target="_blank">
                    <button type="button" class="btn mr-1 btn-color">
                      View Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Porfolio;
