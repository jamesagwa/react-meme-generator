import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createMeme } from '../actions';

class MemeItem extends Component {
    constructor(){
        super();
        this.state = {
            hovered: false
        }
    }

    postMeme(){
        const { text0, text1, createMeme } = this.props;
        const memeObj = {
            template_id: this.props.meme.id,
            text0,
            text1
        }
        createMeme(memeObj);
    }

    render(){
        return(
            <div 
                className="meme-item"
                onMouseEnter={() => this.setState({ hovered: true})}
                onMouseLeave= {() => this.setState({ hovered: false})}
                onClick={() => this.postMeme()}
            >
            <img 
                className={this.state.hovered ? "meme-img darken-img" : "meme-img" }
                src={this.props.meme.url} 
                alt={this.props.meme.name}
            />
            <p className={this.state.hovered ? "meme-txt" : "no-txt"}>
            {this.props.meme.name}
            </p>
            </div>
        );
    }
}

// the second argument to the connect function is an object with the action creators as properties
export default connect(null, { createMeme })(MemeItem);