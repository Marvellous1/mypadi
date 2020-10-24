import React, { Component } from 'react';
import{ connect } from 'react-redux' 
import { editSection, deleteSection } from '../../store/actions/sectionActions'
import { Redirect } from 'react-router-dom'

class EditSection extends Component {
    state = {
        title : '',
        objective : '',
        BoardID: null,
        id: null,
        display : 'none',
    }

    componentWillMount() {
        const { id} = this.props.sectionInfo
        const { BoardID} = this.props
        this.setState({BoardID, id})
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.editSection(this.state)
        this.setState({display: 'none'})
    }
    close = () => {
        this.setState({display: 'none'})
    }

    deleteSection = () => {
        this.props.deleteSection(this.state)
        console.log('deleted', this.state)
    }

    toggleForm = () => {
        if (this.state.display === 'none') {
            this.setState({display: 'block'})
        }
        else if (this.state.display=== 'block') {
            this.setState({display: 'none'})
        }
    }

    render() {
        const { auth, sectionInfo} = this.props;
        if(!auth.uid) return <Redirect to = '/signIn' />
        return (
            <span className ="right">
                <div style = {{display: 'inline'}}>
                    <i className="material-icons" onClick= {this.toggleForm} style = {{margin:'10px'}}>edit</i>
                    <i className="material-icons" onClick= {this.deleteSection}>delete</i>
                </div> 
                <div className = 'card-panel  grey lighten-5' >
                    <form onSubmit = {this.handleSubmit}  style = {{ display: this.state.display}}>
                        <i className="material-icons right" onClick= {this.close}>clear</i>
                        <div className="input-field">
                            <label htmlFor="title" class="active">Title</label>
                            <input type="text" id='title'  defaultValue= {sectionInfo.title}  onChange={this.handleChange}/>
                        </div> 
                        <div className="input-field">
                            <label htmlFor="objective" class="active">Objective</label>
                            <textarea className="materialize-textarea" id='objective'  defaultValue= {sectionInfo.objective}  onChange={this.handleChange}/>
                        </div> 
                        <div className="input-field">
                            <button className="btn blue">Save Changes</button>
                        </div> 
                    </form>
                </div>
            </span>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    const id = ownProps.sectionInfo.BoardID    
    const sections = state.firestore.data.sections
    const section = sections ? sections[id] : null
    return {
        section:section,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editSection: (section) => dispatch(editSection(section)),
        deleteSection: (section) => dispatch(deleteSection(section))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditSection)