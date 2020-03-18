import React, {Component } from 'react';
import {BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route'
// import ReactDOM from 'react-dom/Route';

// const User = (params) => {
// return (<h1>Welcome User {params.username}</h1>)
// }

const User = ({match}) => {
    return (<h1>Welcome User {match.params.username}</h1>)
    }

class Home extends Component{
  

    // const state = {
    //     loggedIn:false
    // }
    
    // const loginHandle = () => {
    //     this.setState( prevState => ({
    //       loggedIn: !prevState.loggedIn
    //     }))
    //    }
 
  render(){
    return (
      <Router>
              <ul>
                  <li>
                     <NavLink to="/" exact activeStyle={
                       {color:'red'}
                     }> Home</NavLink>
                  </li>
                  <li>
                     <NavLink to="/about" exact activeStyle={
                       {color:'red'}
                     }> About</NavLink>
                  </li>
                  <li>
                     <NavLink to="/user/john" exact activeStyle={
                       {color:'red'}
                     }> User John</NavLink>
                  </li>
                  <li>
                    <NavLink to="/user/devian" exact activeStyle={
                       {color:'red'}
                     }> User Devian</NavLink>
                  </li>
              </ul>

              {/* <Prompt 
                when={!this.state.loggedIn}
                message = {(location) => {
                  return location.pathname.startsWith('/user') ? 'Are you sure ?' : true
                }}
              /> */}

              {/* <input type="button"  value={this.state.loggedIn ? 'log out' : 'log in'} onClick={this.loginHandle.bind(this)} /> */}

              <Route path="/" exact  strict render={
                () => {
                  return ( 
                    <h1>Welcome Home</h1>
                  )
                }
              } />


                <Route path="/about" exact strict render={
                    () => {
                        return ( 
                            <h1>Welcome About</h1>
                        )
                    }
                } />

            <Route path="/user/:username" exact strict 
                 Component = {User}
              />

              {/* <Route path="/user/:username" exact strict 
                  render={({match}) => (this.state.loggedIn ? (<User username={match.params.username}/>) : (<Redirect to="/" />)
                    )}
              /> */}
      </Router>
    )
  }
}

export default Home;