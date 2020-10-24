import React,{Component} from 'react';

import EditAssignment from './EditAssignment';

class AssignmentSummary extends Component {

    render() {
        const {assignment, index} = this.props;
        console.log('assignment', assignment)
    return (
        <div className="card z-depth-0 grey lighten-2" style ={{padding: '10px', margin : '10px' }}>
                <div className = 'row'>
                    <div className = 'col l3' ><p><b>Assignment {index}: </b> {assignment.title} </p></div>
                    <div className = 'col l9' ><EditAssignment assignmentInfo ={assignment} /></div>
                </div>
                {
                    // <ChooseContentType assignment = {assignment} />                
               }


                
        </div>
    );
};
}

export default AssignmentSummary

