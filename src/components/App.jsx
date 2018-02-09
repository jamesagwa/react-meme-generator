import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Form, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

import MemeItem from './MemeItem';
import MyMemes from './MyMemes';

import '../styles/index.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            memeLimit: 10,
            text0: '',
            text1: ''
        }
    }

    render(){
        return(
            <div>
                <h2><u>Welcome to the meme generator</u></h2>
                <MyMemes />
                <h4><i>Write some text</i></h4>
                <Form inline>
                <FormGroup>
                <ControlLabel>Top</ControlLabel>
                {' '}
                <FormControl 
                    type="text" 
                    placeholder="enter top text"
                    onChange={evt => this.setState({ text0: evt.target.value})}
                />                
                </FormGroup>
                {' '}
                <FormGroup>
                <ControlLabel>Bottom</ControlLabel>
                {' '}
                <FormControl 
                type="text" 
                placeholder="enter bottom text"                
                onChange={evt => this.setState({ text1: evt.target.value })}
                />
                </FormGroup>
                </Form>
                {
                    this.props.memes.slice(0, this.state.memeLimit).map((meme, index) => {
                        return (
                            <MemeItem 
                                key={index} 
                                meme={meme} 
                                text0={this.state.text0}
                                text1={this.state.text1}
                            />
                        );
                    })
                }
                <div className="meme-button" onClick={() => this.setState((prevState, props) => { 
                    return { memeLimit: prevState.memeLimit + 10 }
                })}>Load 10 more memes &raquo;</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, null)(App);