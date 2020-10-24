import React, { Component } from 'react';
import{ connect } from 'react-redux' 
import { deleteNote } from '../../store/actions/noteActions'


class DeleteNote extends Component {
    
    handleChange = (note) => {
        this.props.deleteNote(note)
    }

    render() {
        const {note} = this.props
        return (
            <div>
                <button className="btn" onClick = {() => this.handleChange(note)}>Delete Note</button>
            </div>
        );
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteNote: (note) => dispatch(deleteNote(note))
    }
}

export default connect(null, mapDispatchToProps)(DeleteNote)
