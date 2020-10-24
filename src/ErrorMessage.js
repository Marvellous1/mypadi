import React, { Component } from 'react';
import { connect } from 'react-redux'

class ErrorMessage extends Component {
    constructor(props){
        super(props);
        this.state = {
            ErrorMessage: 'null'
        }
    }
    render() {
            const { authError} = this.props;
            console.log('error', authError)
            if (authError === 'The password is invalid or the user does not have a password.') {
                return <div className = "red-text">Password is incorrect</div> 
            } else if (authError === 'There is no user record corresponding to this identifier. The user may have been deleted.') {
                return <div className = "red-text">No User like that</div> 
            } else if (authError === 'Too many unsuccessful login attempts. Please try again later.') {
                return <div className = "red-text">Too many attempts. Try again in 5 minutes</div> 
            } else
        return <div></div>
    }
}



const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
    }   
}

export default connect(mapStateToProps )(ErrorMessage)