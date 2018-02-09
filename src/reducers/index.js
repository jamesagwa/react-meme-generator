import { combineReducers } from 'redux';

import { RECEIVE_MEMES, NEW_MEME } from '../actions';

const memes = (state = [], action) => {
    switch(action.type) {
        case RECEIVE_MEMES:
        return action.memes;
        default:
        return state;
    }
}

// the name of a reducer function is used to save to state when the reducer is called
// so in the mapStateToProps you use the name of the reducer to get the state by the reducer
const myMeme = (state = [], action) => {
    switch(action.type) {
        case NEW_MEME:
        state = [...state, action.meme];
        return state;
        default:
        return state;
    }
}

 const rootReducer = combineReducers({ memes, myMeme });

 export default rootReducer;