import React, { Component } from "react";
// import {NavLink} from 'react-router-dom'

import SignedOutLinks from "./SignedOutLinks";
import SignedInLinks from "./SignedInLinks";

import { connect } from "react-redux";

class Nav extends Component {
  render() {
    const { auth, children } = this.props;
    const links = auth.uid ? <SignedInLinks content= {children}/> : <SignedOutLinks content= {children}/>;
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
