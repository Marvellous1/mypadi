import React, { Component } from "react";
import HomeImage from "../images/home-image.svg";
import SearchIcon from "../images/search.svg";
import PharmIcon from "../images/pharmacy.svg";
import LeadingImg from "../images/leading-healthcare.svg";
import MobileApp from "../images/mobile-apps.svg";
import ClientImg from "../images/client.svg";
import { Link } from "react-router-dom"

class Home extends Component {
  render() {
    return (
      <div>
        <div class="home d-flex align-items-center">
          <div class="container">
            <div class="row d-flex align-items-center">
              <div class="col-md-6">
                <h1 class="mb-2">Virtual healthcare for you</h1>
                <h6 class="mb-4">
                  Trafalgar provides progressive, and affordable healthcare,
                  accessible on mobile and online for everyone
                </h6>
                <button class="btn blue">
                  <a href="/find-a-doctor.html">Consult today</a>
                </button>
              </div>
              <div class="col-md-6">
                <img src={HomeImage} class="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div class="section services">
          <div class="container">
            <div class="custom-container">
              <div class="title text-center">
                <h2>Our Services</h2>
                <hr />
                <p class="mb-5">
                  We provide to you the best choiches for you. Adjust it to your
                  health needs and make sure your undergo treatment <br />
                  with our highly qualified doctors you can consult with us
                  which type of service is suitable for your health
                </p>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="card">
                    <div class="card-body px-4 py-5">
                      <img src={SearchIcon} class="mb-1" alt="search" />
                      <h3>Search doctor</h3>
                      <p>
                        Choose your doctor from thousands of specialist,
                        general, and trusted hospitals
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card">
                    <div class="card-body px-4 py-5">
                      <img src={PharmIcon} class="mb-1" alt="search" />
                      <h3>Online Pharmacy</h3>
                      <p>
                        Choose your doctor from thousands of specialist,
                        general, and trusted hospitals
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card">
                    <div class="card-body px-4 py-5">
                      <img src={PharmIcon} class="mb-1" alt="search" />
                      <h3>Online Pharmacy</h3>
                      <p>
                        Choose your doctor from thousands of specialist,
                        general, and trusted hospitals
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
                      <h3>Search doctor</h3>
                      <p>
                        Choose your doctor from thousands of specialist,
                        general, and trusted hospitals
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card">
                    <div class="card-body px-4 py-5">
                      <img src={PharmIcon} class="mb-1" alt="search" />
                      <h3>Online Pharmacy</h3>
                      <p>
                        Choose your doctor from thousands of specialist,
                        general, and trusted hospitals
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card">
                    <div class="card-body px-4 py-5">
                      <img src={PharmIcon} class="mb-1" alt="search" />
                      <h3>Online Pharmacy</h3>
                      <p>
                        Choose your doctor from thousands of specialist,
                        general, and trusted hospitals
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="healthcare">
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
                <h3>Leading healthcare providers</h3>
                <hr class="" />
                <div>
                  <p>
                    Trafalgar provides progressive, and affordable healthcare,
                    accessible on mobile and online for everyone. To us, it’s
                    not just work. We take pride in the solutions we deliver
                  </p>
                  <button class="blue-outline btn">
                    <a href="/about.html">Learn More</a>
                  </button>
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
                  Trafalgar provides progressive, and affordable healthcare,
                  accessible on mobile and online for everyone. To us, it’s not
                  just work. We take pride in the solutions we deliver
                </p>
                <button class="blue-outline btn">
                  <a href="/apps.html">Download</a>
                </button>
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

        {/* <div class="section blog">
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
export default Home;
