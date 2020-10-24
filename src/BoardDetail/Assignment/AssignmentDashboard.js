import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import AssignmentList from './AssignmentList';

import { connect } from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import CreateAssignment from './CreateAssignment';

class AssignmentDashboard extends Component {

    render() {
        const {auth, assignments, id} = this.props;
        if (assignments) {
            if(!auth.uid) return <Redirect to = '/signIn' />
            return ( 
                <div>  
                    <AssignmentList assignments = {assignments} auth = {auth}/>                          
                    <CreateAssignment Sid = {id} />
                </div>
    
            );
        } else {
          return (
            <div>
               fgybhjn
            </div>

        );
    }
}
}

const mapStateToProps = (state, ownProps) => {
    // console.log('xx', state.firestore)
    // const id = ownProps.section.id
    // const sections = state.firestore.data.sections
    // const section = sections ? sections[id] : null
    console.log('props',ownProps)
    return {
        assignments: state.firestore.ordered.assignments,
        auth: state.firebase.auth,
        id:  ownProps.location.state.section.id
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(
        ownProps => {
            const storeAs = 'assignments'
            const Testid =  ownProps.location.state.section.id
            // console.log('dd',ownProps.section)
            return [
                {collection: 'sections'},
                {collection: 'sections', 
                 doc: Testid, 
                 subcollections: [{ collection: 'assignments'}], 
                 storeAs }
            ]})
    )(AssignmentDashboard)