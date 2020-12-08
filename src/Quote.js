import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import {quotes, colors} from "./Quotes"

export default class Quote extends Component {
    constructor(props){
        super(props)
        this.state= {
            quote: "This fire that we call Loving is too strong for human minds. But just right for human souls",
            author: "Aberjhani",
            style: ""
        }
    }

    handleQuote = () => {
        console.log(quotes)
        console.log(colors)
        const quoteArr = quotes.map(val => val.quote)

        const authorArr = quotes.map(val => val.author)
        const randomAuthor = authorArr[Math.floor(Math.random() * authorArr.length)]
        const randomColor = colors[Math.floor(Math.random() * colors.length)]
        console.log(randomAuthor);
        const randomQuote = quoteArr[Math.floor(Math.random() * quoteArr.length)]
        console.log(randomQuote);
        this.setState({
            quote: randomQuote,
            author: randomAuthor,
            style: randomColor
        })
        
    }

    render() {
        const element = <FontAwesomeIcon icon={faHome} />
        return (
            <div className="container" style={{backgroundColor: this.state.style}}>
                <div id="quote-box">
                    <p id="quote-text" style={{color: this.state.style}}>{this.state.quote}</p>
                    <p id="author" style={{color: this.state.style}}>-{this.state.author}</p>
                    <div id="links">
                        <div id="media-links">
                            <a href="google.com" id="tweet-quote" style={{backgroundColor: this.state.style}}>{element}</a>
                            <a href="google.com" id="tweet-quote" style={{backgroundColor: this.state.style}}>{element}</a>
                        </div>
                        <button id="new-quote" onClick={this.handleQuote} style={{backgroundColor: this.state.style}}>New quote</button>
                    </div>
                </div>
            </div>
        )
    }
}
