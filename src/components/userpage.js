import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import "./userpage.css"


class homePage extends Component{
    render(){
        return(
            <main className = "main">
               <header>
                   <div className = "info">
                   <p className = "name">Reid Spencer</p>
                   <p className = "intro">Official Webstite</p>  
                   </div> 
                   </header> 

                   <nav className = "hNav">
                       <button className = "but">Bookshelf</button>
                       <button className = "but">Bio</button>
                       <button className = "but">Faq</button>
                       <button className = "but">Links</button>
                       <button className = "but">Contact</button>

                   </nav>
                <section>
                    <p>About</p>
                    <img  className = "profilePic" src = "http://www.isaaa.org/kc/cropbiotechupdate/files/images/1232019105233PM.jpg"></img>
                    <p>blah blah blah blah blah blah</p>
                </section>

                <section>
                    <p>bookshelf</p>

                <p>here were gonna have the books themselves. For now were just gonna have a red box</p>
                <div className = "books">book</div>
                </section>
                

                <section>
                    <p>Links</p>

                    <p>Links</p>
                    <p>Links</p>
                    <p>Links</p>

                </section>

                <section>
                    Contact
                    <input></input><p> probably enter message here</p>
                    <p></p>
                </section>
                
                <footer>
                    not sure what to have here, but gonna have something
                </footer>
                </main>
            )
    }
}
export default homePage