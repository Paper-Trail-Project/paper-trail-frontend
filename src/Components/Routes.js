import React from 'react'
import { BrowserRouter as Router,Switch, Route, Redirect } from "react-router-dom";
import Signup from './Signup'
import Login from './Login'
import LandingPage from './LandingPage'
import PrivateRoute from './PrivateRoute';
import ChooseMonsterPage from './ChooseMonsterPage'
import Encyclopedia from './Encyclopedia'


export default function Routes(props) {


  //need to revalidate a user upon refresh. Either componentDidMount or useEffect.

    const login = (user, history) => {

        // console.log("login function has been reached", user)
        fetch('http://localhost:8000/login', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(user)
          //will make a key of user, will be equal to the information we send (object we pass in as user)
        })
        .then(response => response.json())
        .then(({ name, username, token }) => {
          localStorage.setItem('token', token)
          localStorage.setItem('name', name)
          localStorage.setItem('username', username)
          history.push('/home')
        })
      }

    const signup = (newUser, history) => {

      fetch('http://localhost:8000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
      })
      .then(response => response.json())
      .then(response => history.push('/home'))
      // .then(response => {
      //   localStorage.setItem('token', response.password)
      //   history.push('/home')
      // })
    }

    return (
        <div>
            <Router>
                <Switch>

                    <PrivateRoute exact path='/home' />
                    {/* if you want to pass a prop down, change component to render */}
                    {/* render takes a function, this function will return the component you want to go to (login) */}
                    <Route exact path='/login' render={(routerProps) => <Login {...routerProps} login={login}/>} />
                    <Route exact path='/signup' render={(routerProps) => <Signup {...routerProps} signup={signup}/>}/>
                    <Route exact path='/choose_monster' render={(routerProps) => <ChooseMonsterPage {...routerProps}/>}/>
                    <Route exact path='/encyclopedia' render={(routerProps) => <Encyclopedia {...routerProps} />}/>
                    <Route path='/' component={LandingPage}/>
                    <Route render={() => <Redirect to='/' />}/>
                       
                </Switch>
            </Router>
            
        </div>
    )
}
