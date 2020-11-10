import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import {BrowserRouter, Route, Switch } from 'react-router-dom'

import Nav from './Nav/Nav'

import Home from './Pages/Home';
import About from './Pages/About'
import Contact from './Pages/Contact'
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';

import BoardDashboard from './BoardDashboard/BoardDashboard';

import JournalDashboard from './BoardDetail/Journal/JournalDashboard';
import CreateJournal from './BoardDetail/Journal/CreateJournal';
import CreateNote from './BoardDetail/Note/CreateNote';
import NoteDashboard from './BoardDetail/Note/NoteDashboard';
import ChooseContentType from './BoardDetail/Content/ChooseContentType';
import CreateArticle from './BoardDetail/Content/Article/CreateArticle';
import UserProfile from './Auth/UserProfile';
import "./style.css"
import ViewJournal from './BoardDetail/Journal/ViewJournal';
import EditJournal from './BoardDetail/Journal/EditJournal';
import Error from './Pages/Error';
import ForgotPassword from './Auth/ForgotPassword';

class App extends Component {

  render() {
    return (
     <BrowserRouter>
      <div >         
        <Nav>
        <Switch>
          <Route exact path = '/' component = {Home} />
          
          {/* <Route exact path = '/' component = {LandingPage} /> */}
          <Route exact path = '/About' component = {About} />
          <Route path = '/Contact' component = {Contact} />
          <Route path = '/SignUp' component = {SignUp} />
          <Route path = '/SignIn' component = {SignIn} />

          <Route path = '/profile' component = {UserProfile} />

          <Route path = '/dashboard' component = {BoardDashboard} />

          <Route exact path = '/board/:BoardID/' component = {JournalDashboard} />
          <Route exact path= '/board/:BoardID/new' component = {CreateJournal} />

        <Route exact path= '/:JournalID/view' component = {ViewJournal} />
    <Route exact path= '/:JournalID/edit' component = {EditJournal} />


          <Route path = '/:Sid/note/create' component = {CreateNote} />

          <Route path = '/:Sid/note' component = {NoteDashboard} />

          <Route component={Error}></Route>
        </Switch>
        </Nav>
      </div>     
     </BrowserRouter>

    );
  }
}

export default App;
