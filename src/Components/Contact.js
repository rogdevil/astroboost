import React, { Component } from 'react'
import "./contact.css"
import Button from '../Components/Button'

export default class Contact extends Component {
    state = {
        email: "",
        message: ""
    }

    onSubmit = e => {
        e.preventDefault();
        
    }

    onChange = e => {
        this.setState({[e.target]: [e.value]})
    }
    render() {
        console.log(this.state.email)
        return (
            <div className = "Contact">
               <h1> Contact </h1>
               <form>
                   <input placeholder = "email" />
                   <textarea cols = "50" placeholder = "send us a message" />
                   <Button style = {{margin: 0}} className = "button" type = "submit" placeholder = "submit" name = "Submit" />
               </form>
            </div>
        )
    }
}
