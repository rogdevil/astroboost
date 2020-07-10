import React, { Component } from 'react'

export default class Question extends Component {

    state = {expansion: false}
    render() {
        return (
            <div className = "Question" style = {this.state.expansion ? {height:"12rem"}: {}}>
            <h2> {this.props.title} </h2>

            <button style = {this.state.expansion ? {transform:"rotate(84deg)"}: {}} onClick = {() => this.setState({expansion: !this.state.expansion})} />
            <p> {this.props.body} </p>
            </div>
       )
    }
}
