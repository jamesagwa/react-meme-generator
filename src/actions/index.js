import { username, password } from './secrets';

export const RECEIVE_MEMES = 'RECEIVE_MEMES';
export const NEW_MEME = 'NEW_MEME';

function receiveMemes (json) {
    const { memes } = json.data;
    return {
        type: RECEIVE_MEMES,
        memes
    }
}

const fetchMemesJson = () => {
    return fetch('https://api.imgflip.com/get_memes')
    .then(response => response.json())
}

// A special redux function for handling asyncronous code and 
// receives a dispatch parameter which is called with the action creator as argument
// here it fetches data from an api and passes the returned data to the action creator
export const fetchMemes = () => {
    return (dispatch) => {
        return fetchMemesJson()
        .then(json => dispatch(receiveMemes(json)));
    }
}

const newMemes = (meme) => {
    return {
        type: NEW_MEME,
        meme
    }
}

const postMemesJson = (params) => {
    params['username'] = username;
    params['password'] = password;

    const bodyParams = Object.keys(params).map(key => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    }).join('&');

    return fetch('https://api.imgflip.com/caption_image', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: bodyParams
    }).then(response => response.json());
};

export const createMeme = (new_meme_object) => {
return (dispatch) => {
    return postMemesJson(new_meme_object)
    .then(new_meme => dispatch(newMemes(new_meme)));
}
}