import React from 'react'
import { BrowserRouter as Router,Switch, Route, Redirect} from "react-router-dom";
import Signup from './Signup'
import Login from './Login'
import LandingPage from './LandingPage'
import PrivateRoute from './PrivateRoute';

export default function Routes(props) {


    const login = (user) => {
        console.log("login function has been reached", user)
        fetch('http://localhost:8000/login', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({user})
          //will make a key of user, will be equal to the information we send (object we pass in as user)
        })
        .then(response => response.json())
        .then(response => console.log(response))
      }

      //     .then(({token}) => {
//         localStorage.setItem("token", token)
//         console.log("here it is!", localStorage.getItem("token"))
//     })

    return (
        <div>
            <Router>
                <Switch>
                    <PrivateRoute exact path='/home' />
                    {/* if you want to pass a prop down, change component to render */}
                    {/* render takes a function, this function will return the component you want to go to (login) */}
                    <Route exact path='/login' render={(routerProps) => <Login {...routerProps} login={login}/>} />
                    <Route exact path='/signup' component={Signup}/>
                    <Route path='/' component={LandingPage}/>
                </Switch>
            </Router>
            
        </div>
    )
}
