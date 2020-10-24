import React, { Component } from 'react';
import{ connect } from 'react-redux' 
import { createArticle } from '../../../store/actions/articleActions'
import { Redirect } from 'react-router-dom'

import { Editor } from '@tinymce/tinymce-react';

class CreateArticle extends Component {
    state = {
        body: '',
        type : '',
        id: null,
        Sid: null,
        article: '',
        display : 'none',
    }

    componentWillMount() {
        const {note, article} = this.props
        console.log('bhvhgg',this.props)

        this.setState({
            type: 'article',
            Sid : note.Sid,
            id: note.id
        })
    }

  handleEditorChange = (e) => {
      this.setState({ body : e.target.getContent()})
    console.log('Content was updated:', this.state.body);
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    const { auth } = this.props;
     console.log('pos', this.state)
    this.props.createArticle(this.state)
    this.setState({display: 'none'})
    // this.props.history.push('/'+ this.state.BoardID + '/sections' )
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
    const { note} = this.props;

    return (
        <div>
        <button className="btn" onClick={this.toggleForm}>Edit</button>
        <div style={{display: this.state.display}}>
      <Editor
        initialValue={note.body}
        init={{
            selector: 'textarea#article',
        min_height: 350,
          menu: {
            view: {title: note.title, items: 'preview'},
            tools: { title: 'Tools', items: 'spellchecker | wordcount' },
            table: { title: 'Table', items: 'inserttable | cell row column | tableprops deletetable' },
          },
          menubar:  'title, tools, table',
          plugins: [
            'advlist autolink spellchecker lists link, tools image charmap print preview anchor',
            'searchreplace wordcount visualblocks code fullscreen autoresize',
            'insertdatetime table  media table paste code help '
          ],
          toolbar:
            'undo redo preview | formatselect | bold italic  | \
            alignleft aligncenter  | link image |\
            bullist numlist outdent indent | removeformat '
        }}
        onChange={this.handleEditorChange}
      />
      <textarea id='article' className="materialize-textarea" />
      <button className="btn" onClick={this.handleSubmit}>Save</button>
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createArticle: (article) => dispatch(createArticle(article))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateArticle)




