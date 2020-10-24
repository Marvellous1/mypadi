import React, { Component } from 'react';

import NoteDashboard from './Note/NoteDashboard';
import { Link } from 'react-router-dom';

class ChooseNoteType extends Component {
    state = {
        display : 'none',
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
        const {section} = this.props
        return (
            <div>
                <div >
                    <i className="material-icons" onClick= {this.toggleForm} style = {{fontSize: '32px'}}>
                        {this.state.display === 'none' ? 'add' : 'clear'}
                    </i>
                </div> 
                <div className="card grey lighten-4" style= {{display : this.state.display, padding: '10px'}}>

                    <Link to = {{ pathname: '/test', state : {section} }}>
                        <button className = " btn red" style= {{ marginTop: '10px'}}>Assignment</button>
                    </Link>
                </div>
            </div>
        );
    }
}
export default ChooseNoteType