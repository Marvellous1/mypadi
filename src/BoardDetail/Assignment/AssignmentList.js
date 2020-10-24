import React from 'react';
import AssignmentSummary from './AssignmentSummary'

const AssignmentList = ({assignments, auth}) => {
    return (
        <div>
            {  assignments && assignments.map((assignment, index) => {
                return (
                    <AssignmentSummary assignment ={assignment} index = {index + 1}/>

                )
            })
        }
        </div>
    );
};

export default AssignmentList