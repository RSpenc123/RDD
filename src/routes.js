import React from 'react'
import {Switch, Route} from 'react-router-dom'
import userPage from './components/userpage'
import Register from './components/register'
import homepage from './components/homepage'
import login from './components/login'



// const id = this.props.id
export default (
    
    <Switch>
        <Route exact path = '/' component = {homepage}/>
        {/* <Route path = '/Register' component = {Register}/> */}
        <Route path = '/login' component = {login}/>
        {/* <Route path = '/userPage' component = {userPage}/> */}
        {/* <Route path = '/homepage' component = {homepage}/> */}

        
        
        


    </Switch>
)