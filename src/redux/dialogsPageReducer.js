const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const addMessage = () => ({ type: ADD_MESSAGE })

export const onMessageChange = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })

export const clearMessageInput = () => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: '' })

let initialState = {
    dialogsData: [
        { id: 1, name: "Alex", age: 24 },
        { id: 2, name: "Kate", age: 21 },
        { id: 3, name: "Sara", age: 19 },
        { id: 4, name: "Ann", age: 22 },
        { id: 5, name: "Bob", age: 18 },
        { id: 6, name: "Nik", age: 26 }
    ],
    messagesData: [
        { id: 1, text: "Alex Alo hellow", age: 24 },
        { id: 2, text: "Kate Alo hellow", age: 21 },
        { id: 3, text: "Sara Alo hellow", age: 19 },
        { id: 4, text: "Ann Alo hellow", age: 22 },
        { id: 5, text: "Bob Alo hellow", age: 18 },
        { id: 6, text: "Nik Alo hellow", age: 26 }
    ],
    newMessageText: ''
};

const dialogsPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: state.dialogsData.length,
                text: state.newMessageText,
                age: state.dialogsData[5].age
            }
            return {
                ...state,
                newMessageText: '',
                messagesData: [...state.messagesData, newMessage]
            }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newText,
            }
        }
        default:
            return state;
    }
}

export default dialogsPageReducer;