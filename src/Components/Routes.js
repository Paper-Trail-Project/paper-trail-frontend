import React from 'react'
import { BrowserRouter as Router,Switch, Route, Redirect} from "react-router-dom";
import Signup from './Signup'
import Login from './Login'
import LandingPage from './LandingPage'


export default function Routes() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path='/' component={LandingPage}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/signup' component={Signup}/>
                    <Route render={() => <Redirect to='/' />}/>
                </Switch>
            </Router>
            
        </div>
    )
}
