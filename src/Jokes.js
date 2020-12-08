import React, { Component } from 'react';
import axios from"axios";

export default class Jokes extends Component {
    constructor(props){
        super(props)
        this.state = {
            jokes: []
        }
    }

    componentDidMount() {
        axios
            .get(`https://icanhazdadjoke.com/search?term=love`, {
            headers: { Accept: "application/json" }
            })
            .then(res => {
                console.log(res.data.results)
                const jokes = res.data.results.map(joke => ({
                    id: joke.id,
                    text: joke.joke
                }))
                console.log(jokes)
                this.setState({jokes})
            })
    }
    render() {
        let data = "sorry, no jokes resulet yet";
        if(this.state.jokes.length > 0){
            data = this.state.jokes.map(joke => (
                <div key={joke.id}>
                    <p>{joke.text}</p>
                </div>
            ))
        }
        return (
            <div>
                {data}
            </div>
        )
    }
}
