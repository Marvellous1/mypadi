import React, { Component } from "react";
import Format from "../images/Format.svg";
import HomeImage from "../images/home-image.png";
import SearchIcon from "../images/Search.svg";
import PharmIcon from "../images/pharmacy.svg";
import LeadingImg from "../images/leading-img.png";
import MobileApp from "../images/mobile-apps.png";
import ClientImg from "../images/client.svg";
import Secured from "../images/Secured.svg";
import Limits from "../images/Limits.svg";
import Tags from "../images/Tags.svg";

import Access from "../images/Access.svg";
import { Link, Redirect } from "react-router-dom"
import { connect } from "react-redux";


class Home extends Component {
  render() {
    if (this.props.auth.uid) return (<Redirect to ="/dashboard" />)
    
    return (
      <div>
        <div class="home d-flex align-items-center">
          <div class="container">
            <div class="row d-flex align-items-center">
              <div class="col-md-6 mb-5 text-center text-md-left order-2 order-sm-1">
                <h1 class="mb-2">Writing Just Became <br className="d-none d-md-block"/> Fun</h1>
                <h6 class="mb-4">
                Writing is a way of expressing yourself. Express
                yourself using Pad, organise yourself and get 
                a feeling like never before 
                </h6>
                <button class="btn blue">
                  <a href="/find-a-doctor.html">Get Started</a>
                </button>
              </div>
              <div class="col-md-6 mb-5 order-1 order-sm-2">
                <img src={HomeImage} class="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div class="section services" id="features">
          <div class="container">
            <div class="custom-container">
              <div class="title text-center">
                <h2>Top Features</h2>
                <hr />
                <p class="mb-5">
                All our features were tailored to serve you better.
                </p>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="card">
                    <div class="card-body px-4 py-5">
                      <img src={Format} class="mb-1" alt="format" />
                      <h3>Smart Formatting</h3>
                      <p>
                      Use our highly customizable format
                      tools to style your journals
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card">
                    <div class="card-body px-4 py-5">
                      <img src={Access} class="mb-1" alt="access" />
                      <h3>Access Anywhere</h3>
                      <p>
                      Write Once, view on any device anywhere in the world
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card">
                    <div class="card-body px-4 py-5">
                      <img src={Tags} class="mb-1" alt="tags" />
                      <h3>Tags and Labels</h3>
                      <p>
                      Use Tags and labels to easily sort your journals
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-4">
                  <div class="card">
                    <div class="card-body px-4 py-5">
                      <img src={SearchIcon} class="mb-1" alt="search" />
                      <h3>Search Notes</h3>
                      <p>
                      Use our incorprated search bar to  easily find your journals
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card">
                    <div class="card-body px-4 py-5">
                      <img src={Secured} class="mb-1" alt="secured" />
                      <h3>Secured Info</h3>
                      <p>
                      Your journals are 100% secured in 
                      our databse which cannot be easily accesed
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card">
                    <div class="card-body px-4 py-5">
                      <img src={Limits} class="mb-1" alt="limits" />
                      <h3>No limits</h3>
                      <p>
                      Write as many  journals you can possibly write. No charges, completely free 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="healthcare" id="mobile-app">
          <div class="container py-5">
            <div class="row d-flex align-items-center">
              <div class="col-md-6">
                <img
                  src={LeadingImg}
                  alt="leading-img"
                  class="img-fluid"
                />
              </div>
              <div class="col-md-5 offset-md-1 text-left">
                <h3>Very Easy To 
                Use</h3>
                <hr class="" />
                <div>
                  <p>
                  Our website is created to be very easy to use. All you have to do is, register, create your board to get your categorize your journals and start writing
                  </p>
                    <a class="blue-outline btn" href="/signup">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container py-5">
          <div class="sectin row d-flex align-items-center">
            <div class="col-md-5 offset-md-1 text-left">
              <h3>Download our mobile apps</h3>
              <hr class="" />
              <div>
                <p>
                Our mobile apps are on the way, We plan on bringing Padi very close to you, so you can write whenever you want. We will notice all our users immediately the app is ready. Get started now to get the update. 
                </p>
                <a class="blue-outline btn" href="/signup">Get Started</a>
              </div>
            </div>
            <div class="col-md-6">
              <img
                src={MobileApp}
                alt="leading-healthcare"
                class="img-fluid"
              />
            </div>
          </div>
        </div>

        <div class="container" id="testimonial">
          <div class="testimonial text-white mt-5 p-3 p-md-5">
            <div class="text-center">
              <h2>What our customer are saying</h2>
              <hr class="border-white" />
            </div>
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="row">
                    <div class="col-md-6 d-md-flex text-center text-md-left align-items-center">
                      <img
                        src={ClientImg}
                        class="img-fluid mr-3"
                        alt=""
                      />
                      <div>
                        <h5>Edward Newgate</h5>
                        <p class="text-white">Founder Circle</p>
                      </div>
                    </div>
                    <div class="col-md-6 d-flex text-center text-md-left align-items-center">
                      <p class="text-white">
                        “Our dedicated patient engagement app and web portal
                        allow you to access information instantaneously (no
                        tedeous form, long calls, or administrative hassle) and
                        securely”
                      </p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item ">
                  <div class="row">
                    <div class="col-md-6 d-md-flex text-center text-md-left align-items-center">
                      <img
                        src={ClientImg}
                        class="img-fluid mr-3"
                        alt=""
                      />
                      <div>
                        <h5>Edward Newgate</h5>
                        <p class="text-white">Founder Circle</p>
                      </div>
                    </div>
                    <div class="col-md-6 d-flex text-center text-md-left align-items-center">
                      <p class="text-white">
                        “Our dedicated patient engagement app and web portal
                        allow you to access information instantaneously (no
                        tedeous form, long calls, or administrative hassle) and
                        securely”
                      </p>
                    </div>
                  </div>
                </div>
             
                           </div>
              <div class="carousel-nav">
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span class="btn btn-primary btn-sm" aria-hidden="true">
                    prev
                  </span>
                  <span class="sr-only">Previous</span>
                </a>
                <ol class="carousel-indicators mb-n1">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                </ol>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span class="btn btn-primary btn-sm" aria-hidden="true">
                    next
                  </span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <div class="journal blog">
          <div class="container">
            <div class="custom-container">
              <div class="title text-center">
                <h2>Check out our latest article</h2>
                <hr />
              </div>
              <div class="row mb-3">
                <div class="col-md-6 col-lg-4">
                  <div class="card">
                    <div class="card-img-top">
                      <img src="/images/blog1.svg" alt="" class="img-fluid" />
                    </div>
                    <div class="card-body">
                      <h5>Disease detection, check up in the laboratory</h5>
                      <p>
                        In this case, the role of the health laboratory is very
                        important to do a disease detection...
                      </p>
                      <p class="read-more">Read More</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4">
                  <div class="card">
                    <div class="card-img-top">
                      <img src="/images/blog1.svg" alt="" class="img-fluid" />
                    </div>
                    <div class="card-body">
                      <h5>Disease detection, check up in the laboratory</h5>
                      <p>
                        In this case, the role of the health laboratory is very
                        important to do a disease detection...
                      </p>
                      <p class="read-more">Read More</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4">
                  <div class="card">
                    <div class="card-img-top">
                      <img src="/images/blog1.svg" alt="" class="img-fluid" />
                    </div>
                    <div class="card-body">
                      <h5>Disease detection, check up in the laboratory</h5>
                      <p>
                        In this case, the role of the health laboratory is very
                        important to do a disease detection...
                      </p>
                      <p class="read-more">Read More</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center">
                <button class="btn blue-outline">View All</button>
              </div>
            </div>
          </div>
        </div> */}

      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Home);

