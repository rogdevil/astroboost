import React, { Component } from 'react'
import Question from "./Question.js"
import "./FAQ.css"



export default class FAQ extends Component {
    state = { questionList: [
    {
    title:"Lorem ipsum dolor sit amet", 
    body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis bibendum tempor. \
    Nullam convallis laoreet dui, in scelerisque nibh ultrices at. Vivamus velit lorem, laoreet eget ante id, \
    ullamcorper fermentum quam. Sed a malesuada velit. Curabitur vulputate ligula a tellus cursus lobortis. \
    Curabitur efficitur nibh ante. Aliquam sit amet scelerisque velit, id convallis risus."
    },
    {
    title:"Lorem ipsum dolor sit amet", 
    body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis bibendum tempor. \
    Nullam convallis laoreet dui, in scelerisque nibh ultrices at. Vivamus velit lorem, laoreet eget ante id, \
    ullamcorper fermentum quam. Sed a malesuada velit. Curabitur vulputate ligula a tellus cursus lobortis. \
    Curabitur efficitur nibh ante. Aliquam sit amet scelerisque velit, id convallis risus."
    },
    {
    title:"Lorem ipsum dolor sit amet", 
    body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis bibendum tempor. \
    Nullam convallis laoreet dui, in scelerisque nibh ultrices at. Vivamus velit lorem, laoreet eget ante id, \
    ullamcorper fermentum quam. Sed a malesuada velit. Curabitur vulputate ligula a tellus cursus lobortis. \
    Curabitur efficitur nibh ante. Aliquam sit amet scelerisque velit, id convallis risus."
    },
    {
    title:"Lorem ipsum dolor sit amet", 
    body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis bibendum tempor. \
    Nullam convallis laoreet dui, in scelerisque nibh ultrices at. Vivamus velit lorem, laoreet eget ante id, \
    ullamcorper fermentum quam. Sed a malesuada velit. Curabitur vulputate ligula a tellus cursus lobortis. \
    Curabitur efficitur nibh ante. Aliquam sit amet scelerisque velit, id convallis risus."
    },
    ]}
    
    render() {
        return (
            <div className = "FAQ">
                <h1> Frequently Asked Questions </h1>
                {this.state.questionList.map(question =>  
                <Question title = {question.title} body = {question.body} />)
                }
            </div>
        )
    }
}
