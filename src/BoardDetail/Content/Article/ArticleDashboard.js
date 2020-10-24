import React, { Component } from 'react';
import { connect } from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import CreateArticle from './CreateArticle';



class ArticleDashboard extends Component {
    render() {
        const {article,note} = this.props
        const BodyCheck = article ? console.log('p', this.props) : <CreateArticle note = {note}/>
        return (
            <div>
               {BodyCheck}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
        // const id = ownProps.note.id
        // const article = articles ? articles[id] : null
    return {
        auth: state.firebase.auth,
        article : state.firestore.data.article
        
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(
        ownProps => {
            const storeAs = 'article'
            const TestSid = ownProps.note.Sid
            const Testid = ownProps.note.id


        return [
        {collection: TestSid, doc: Testid,  storeAs},

    ]})
    )(ArticleDashboard)