import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import {BrowserRouter, Route, Switch } from 'react-router-dom'

import Nav from './Nav/Nav'

import Home from './Pages/Home';
import About from './Pages/About'
import Contact from './Pages/Contact'
import Demo2 from './Demo2'
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';

import BoardDashboard from './BoardDashboard/BoardDashboard';

import SectionDashboard from './BoardDetail/Section/SectionDashboard';
import CreateSection from './BoardDetail/Section/CreateSection';
import CreateNote from './BoardDetail/Note/CreateNote';
import NoteDashboard from './BoardDetail/Note/NoteDashboard';
import ChooseContentType from './BoardDetail/Content/ChooseContentType';
import CreateArticle from './BoardDetail/Content/Article/CreateArticle';
import CreateAssignment from './BoardDetail/Assignment/CreateAssignment';
import AssignmentDashboard from './BoardDetail/Assignment/AssignmentDashboard';
import UserProfile from './Auth/UserProfile';
import "./style.css"

class App extends Component {

  render() {
    return (
     <BrowserRouter>
      <div >         
        <Nav>
        <Switch>
          <Route exact path = '/' component = {Home} />
          
          {/* <Route exact path = '/' component = {LandingPage} /> */}
          <Route path = '/About' component = {About} />
          <Route path = '/Contact' component = {Contact} />
          <Route path = '/SignUp' component = {SignUp} />
          <Route path = '/SignIn' component = {SignIn} />

          <Route path = '/profile' component = {UserProfile} />

          <Route path = '/dashboard' component = {BoardDashboard} />

          <Route path = '/board/:BoardID/' component = {SectionDashboard} />

          <Route path = '/:BoardID/sections/section' component = {CreateSection} />

          <Route path = '/:Sid/note/create' component = {CreateNote} />
          <Route path = '/:Sid/note' component = {NoteDashboard} />
          <Route path = '/test' component = {AssignmentDashboard} />
          <Route path = '/content/article' component =  {CreateArticle} />
        </Switch>
        </Nav>
      </div>     
     </BrowserRouter>

    );
  }
}

export default App;
