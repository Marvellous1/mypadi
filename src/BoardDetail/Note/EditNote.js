import React, { Component } from 'react';
import{ connect } from 'react-redux' 
import { editNote, deleteNote } from '../../store/actions/noteActions'
import { Redirect } from 'react-router-dom'

class EditNote extends Component {
    state = {
        title : '',
        objective : '',
        Sid: null,
        id: null,
        display : 'none',
    }

    componentWillMount() {
        const { Sid, id} = this.props.noteInfo
        this.setState({Sid, id})
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        
        this.props.editNote(this.state)
        this.setState({submitted: true})
    }

    close = () => {
        this.setState({display: 'none'})
    }

    deleteNote = () => {
        this.props.deleteNote(this.state)
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
        const { auth, noteInfo } = this.props;
        if(!auth.uid) return <Redirect to = '/signIn' />
        return (
            <div>
                <div style = {{display: 'inline'}}>
                    <i className="material-icons" onClick= {this.toggleForm} style = {{margin:'10px'}}>edit</i>
                    <i className="material-icons" onClick= {this.deleteJournal}>delete</i>
                </div> 
                <div className = 'card grey lighten-3' >
                    <form onSubmit = {this.handleSubmit}  style = {{ display: this.state.display, padding: '10px'}}>
                        <i className="material-icons right" onClick= {this.close}>clear</i>
                        <div className="input-field">
                            <label htmlFor="title" class="active">Title</label>
                            <input type="text" id='title'  defaultValue= {noteInfo.title}  onChange={this.handleChange}/>
                        </div> 
                        <div className="input-field">
                            <label htmlFor="objective" class="active">Objective</label>
                            <textarea className="materialize-textarea" id='objective'  defaultValue= {noteInfo.objective}  onChange={this.handleChange}/>
                        </div> 
                        <div className="input-field">
                            <button className="btn blue">Save Changes</button>
                        </div> 
                    </form>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    const id = ownProps.noteInfo.BoardID    
    const notes = state.firestore.data.notes
    const note = notes ? notes[id] : null
    return {
        note:note,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editNote: (note) => dispatch(editNote(note)),
        deleteNote: (note) => dispatch(deleteNote(note))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditNote)