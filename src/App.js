import React from 'react';
import {BrowserRouter as Router ,Redirect , Route, Switch } from 'react-router-dom';
import SideNav from './components/sidenav/sidenav'
import Dashboard from './pages/dashboard/dashboard'
import Users from './pages/users/users'
import Viloyat from './pages/viloyat/viloyat'
import Loading from './components/loading';

import {Login} from '../src/pages'

function App() {
  
  return (
    <div className="App">
      <Router>
            <Switch>
             <Route path="/login" exact component={Login} />
             {/* <Route render={()=><Redirect to='/login'/>}/>  */}
            </Switch>
       
            <Switch>
            <SideNav>
            <Route path = "/" exact  component= {Dashboard}/>
            <Route path = "/users" exact component= {Users}/>
            <Route path = "/viloyat" exact component= {Viloyat}/>
            </SideNav>
            </Switch>
           
      </Router>
    </div>
  );
}

export default App;
