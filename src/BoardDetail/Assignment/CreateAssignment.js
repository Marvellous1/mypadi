import React, { Component } from 'react';
import{ connect } from 'react-redux' 
import { createAssignment } from '../../store/actions/assignmentActions'
import { Redirect } from 'react-router-dom'

class CreateAssignment extends Component {
    state = {
        title : '',
        about : '',
        body : '',
        Sid: null,
        display : 'none',
    }

    componentWillMount() {
        const { Sid } = this.props;
        this.setState({Sid})
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    close = () => {
        this.setState({display: 'none'})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // const { auth } = this.props;
        
        this.props.createAssignment(this.state)
        this.setState({display: 'none'})    }

    toggleForm = () => {
        if (this.state.display === 'none') {
            this.setState({display: 'block'})
        }
        else if (this.state.display=== 'block') {
            this.setState({display: 'none'})
        }
    }

    render() {
        const { auth} = this.props;
        if(!auth.uid) return <Redirect to = '/signIn' />
        return (
            <div> 
                <div className = ' card grey z-depth-0 lighten-3'  >
                    <form onSubmit = {this.handleSubmit} style = {{padding: '20px', margin: '10px', display: this.state.display}}>
                        <i className="material-icons right" onClick= {this.close}>clear</i>
                        <div className="input-field">
                            <label htmlFor="title">Title</label>
                            <input type="text" id='title' onChange={this.handleChange}/>
                        </div> 
                        <div className="input-field">
                            <label htmlFor="about">about</label>
                            <input type="text" id='about' onChange={this.handleChange}/>
                        </div> 
                        <div className="input-field">
                            <button className="btn blue">Create</button>
                        </div> 
                    </form>
                </div>
                <div >
                    <button className="btn btn-block" onClick= {this.toggleForm}>assignment</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createAssignment: (assignment) => dispatch(createAssignment(assignment))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAssignment)