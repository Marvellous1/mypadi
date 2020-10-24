import React, { Component } from 'react';
import{ connect } from 'react-redux' 


class DeleteSection extends Component {
    
    state = {
        BoardID: null,
        id: null,
    }

    handleChange = (p) => {
        const {id} = p.section
        const { BoardID} = p
        this.setState({BoardID, id})
        console.log('jiii', this.state)
        
        this.props.deleteSection(this.state)
        
    }

    render() {
        return (
            <div>
                <button  onClick = {() => this.handleChange(this.props)}>
                    <i className="material-icons">delete</i>
                </button>
            </div>
        );
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(null, mapDispatchToProps)(DeleteSection)
