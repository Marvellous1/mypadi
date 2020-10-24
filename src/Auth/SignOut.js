import React from 'react';
import {connect} from 'react-redux'
import {signOut} from '../store/actions/authActions'

const SignOut = (props) => {
    return (
        <div onClick ={props.signOut} className="logout  mr-5"><a href='#'>Logout</a></div>
    );
};

const mapDispatchToProps = (dispatch) =>{
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignOut)