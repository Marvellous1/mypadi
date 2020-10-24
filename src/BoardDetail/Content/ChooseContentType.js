import React, { Component } from 'react';
import CreateArticle from './Article/CreateArticle';
import { connect } from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'


class ChooseContentType extends Component {
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
        console.log('ppp',this.props)   
        return (
            <div>
                <div >
                    <a href='#' className="material-icons" onClick= {this.toggleForm} style = {{fontSize: '32px'}}>
                        {this.state.display === 'none' ? 'add' : 'back'}
                    </a> 
                </div> 
                <div className="card grey lighten-4" style= {{display : this.state.display, padding: '10px'}}>
                    <CreateArticle note = {this.props.note} article = {this.props.article} />
                </div>
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
)(ChooseContentType)