import React, { Component } from "react";
// import {NavLink} from 'react-router-dom'
import "./nav.css"
import SignedOutLinks from "./SignedOutLinks";
import SignedInLinks from "./SignedInLinks";

import { connect } from "react-redux";

class Nav extends Component {
  render() {
    const { auth, children } = this.props;
    console.log("a", auth.email);
    const links = auth.uid ? <SignedInLinks content= {children}  dName={auth.email.substring(0, 2)}/> : <SignedOutLinks content= {children}/>;
    return (
      <div>
        {links}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Nav);
