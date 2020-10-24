import React, {Component} from 'react';
class LandingPage extends Component {

  render() {
    return (
      <div >
      <section className="slider">
        <ul class="slides">
          <li>
            <img  alt='slides' src="https://lorempixel.com/580/250/nature/1" />   
            <div class="caption center-align">
              <h3>This is our big Tagline!</h3>
              <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
            </div>
          </li>
          <li>
            <img alt='slides'  src="https://lorempixel.com/580/250/nature/2" /> 
            <div class="caption left-align">
              <h3>Left Aligned Caption</h3>
              <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
            </div>
          </li>
          <li>
            <img alt='slides'  src="https://lorempixel.com/580/250/nature/2" />
            <div class="caption right-align">
              <h3>Right Aligned Caption</h3>
              <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
            </div>
          </li>
          <li>
            <img alt='slides'  src="https://lorempixel.com/580/250/nature/4" />
            <div class="caption center-align">
              <h3>This is our big Tagline!</h3>
              <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
            </div>
          </li>
        </ul>
      </section>
      <a class="waves-effect waves-light btn animated bounceInRight">button</a>
      <div class="fixed-action-btn">
        <a class="btn-floating btn-large red">
          <i class="large material-icons">mode_edit</i>
        </a>
        <ul>
          <li><a class="btn-floating red"><i class="material-icons">insert_chart</i></a></li>
          <li><a class="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></a></li>
          <li><a class="btn-floating green"><i class="material-icons">publish</i></a></li>
          <li><a class="btn-floating blue"><i class="material-icons">attach_file</i></a></li>
        </ul>
      </div>
      <div className="row">
        <div className="col s12 m4 l2 red">m</div>
        <div className="col s12 m4 l4 blue">n</div>
        <div className="col s12 m4 l6 green">r</div>
      </div>
    </div>
    );
  }
}

export default LandingPage;
