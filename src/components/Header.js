import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import "./header.css"


class header extends Component{
    render(){
        return(
            <div>
            <Link to="login"><button>Login</button></Link>
            
            <Link to="Register"><button>register</button></Link>
            

            </div>
            )
    }
}
export default header