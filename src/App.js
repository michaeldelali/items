import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
// import Header from '../src/components/header/header.component';
import CreateItem from '../src/components/create-items/create-items.component';
import ShowItem from './components/item-show/item-show.component';
import Register from './pages/register/register.component';
import Header from './components/header/header.component'
import {AuthProvider} from './provider/AuthProvider'
import PrivateRoute from './provider/PrivateRoute'
import Overview from './components/overview/overview.component';
import Major from './components/major/major.component';
import Minor from './components/minor/minor.component';
import Forgot from './components/forgot/forgot.component';

const App = () => {

          return (
            <AuthProvider>   
              <Switch>
                <Router>
                  <Header/>
                      <div className='inner-body'>
                        <PrivateRoute path='/' exact component={Overview}/>
                        <PrivateRoute path ='/createItem' component={CreateItem}/>
                        <Route path ='/items/major' component={Major}/>
                        <PrivateRoute path ='/items/minor' component={Minor}/>
                        <PrivateRoute path ='/item/:id' component={ShowItem}/>
                        <Route path ='/signin' component={Register}/> 
                        <Route path ='/forget' component={Forgot}/>  
                      </div>
                </Router>
              </Switch>
           </AuthProvider>
          );
}

export default App

