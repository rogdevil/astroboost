import React, { Component } from 'react'
import "./contact.css"
import Button from '../Components/Button'
import Footer from './Footer'


export default class Contact extends Component {
    state = {
        email: "",
        message: ""
    }

    //I'll leave this in case it saves some time
    onSubmit = e => {
        e.preventDefault();
        console.log(e.target.email.value, e.target.message.value);
        //Backend
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }
    render() {
        console.log(this.state.email)
        return (
            <div className = "Contact">
            
               <div className = "Introduction"> <h1>Get In Touch</h1> <br /> <p>You need more information? 
                   Check what other persons are saying about our product. 
                   They are very happy with their purchase.</p> 
                   <div className = "text-box"> <h2> Find Us At The Office</h2> <p> Lorem Ipsum Dolor Sit Amet <br />
                   Lorem Ipsum Dolor Sit Amet <br /> Lorem Ipsum Dolor Sit Amet <br /></p>
                   </div>
                   <div className = "text-box"> <h2> Find Us At The Office</h2> <p> Lorem Ipsum Dolor Sit Amet <br />
                   Lorem Ipsum Dolor Sit Amet <br /> Lorem Ipsum Dolor Sit Amet <br /></p>
                   </div>
                </div>   
                <div class = "Form">
                <h1> Contact Us </h1>
               <form onSubmit={this.onSubmit} id="contact">
               <input className = "Name" name = "first_name" placeholder = "First Name" value={this.state.email} onChange={this.onChange} style = {{marginRight:"10%"}}/>
               <input className = "Name" name = "last_name" placeholder = "Last Name" value={this.state.email} onChange={this.onChange} />
                   <input name = "email" placeholder = "Email" value={this.state.email} onChange={this.onChange} />
                   <textarea cols = "50" rows = "15" placeholder = "Send us a message" name = "message" value={this.state.message} onChange = {this.onChange}/>
                 
                   <Button type = "submit" form = "contact" name="Submit" />
               </form> 
               </div>
               <Footer />
          </div>
        )
    }
}
