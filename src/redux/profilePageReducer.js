const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostActionCreator = () => ({ type: ADD_POST })

export const onPostChangeActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const clearPostInputActionCreator = () => ({ type: UPDATE_NEW_POST_TEXT, newText: '' })

let initialState = {
    postsData: [
        { id: 1, postMessage: "Hi, how are you?", likes: 2, shares: 12 },
        { id: 2, postMessage: "Thank I'm OK!", likes: 13, shares: 32 },
        { id: 3, postMessage: "When u'll come home?", likes: 24, shares: 2 },
        { id: 4, postMessage: "Next week, I guess...", likes: 4, shares: 1 },
        { id: 5, postMessage: "When u'll come home?", likes: 24, shares: 2 },
        { id: 6, postMessage: "Next week, I guess...", likes: 4, shares: 1 },
        { id: 7, postMessage: "When u'll come home?", likes: 24, shares: 2 },
        { id: 8, postMessage: "Next week, I guess...", likes: 4, shares: 1 }
    ],
    newPostText: ''
};

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let stateCopy = { ...state };
            let newPost = {
                id: stateCopy.postsData.length,
                postMessage: state.newPostText,
                lekes: 0,
                shares: 0
            }
            stateCopy.postsData = [...state.postsData];
            stateCopy.postsData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = { ...state };
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export default profilePageReducer;