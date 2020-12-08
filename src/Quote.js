import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import {quotes} from "./Quotes"

export default class Quote extends Component {
    constructor(props){
        super(props)
        this.state= {
            quote: "This fire that we call Loving is too strong for human minds. But just right for human souls",
            author: "Aberjhani",
            style: 
        }
    }

    handleQuote = () => {
        console.log(quotes)
        const quoteArr = quotes.map(val => val.quote)

        const authorArr = quotes.map(val => val.author)
        const randomAuthor = authorArr[Math.floor(Math.random() * authorArr.length)]
        console.log(randomAuthor);
        const randomQuote = quoteArr[Math.floor(Math.random() * quoteArr.length)]
        console.log(randomQuote);
        this.setState({
            quote: randomQuote,
            author: randomAuthor
        })
        
    }

    render() {
        const element = <FontAwesomeIcon icon={faHome} />
        return (
            <div className="container">
                <div id="quote-box">
                    <p id="quote-text">{this.state.quote}</p>
                    <p id="author">-{this.state.author}</p>
                    <div id="links">
                        <div id="media-links">
                            <a href="google.com" id="tweet-quote">{element}</a>
                            <a href="google.com" id="tweet-quote">{element}</a>
                        </div>
                        <button id="new-quote" onClick={this.handleQuote}>New quote</button>
                    </div>
                </div>
            </div>
        )
    }
}
