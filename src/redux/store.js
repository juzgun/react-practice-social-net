import dialogsPageReducer from "./dialogsPageReducer";
import profilePageReducer from "./profilePageReducer";



let store = {
    _state: {
        dialogsPage: {
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
        },

        profilePage: {
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
        }
    },
    _callSubscriber() {
        console.log('state was changed')
    },
    getState() {
        return this._state;
    },
    addPost(postMessage) {
        let newPost = {
            id: this.getState().profilePage.postsData.length,
            postMessage: this._state.profilePage.newPostText,
            lekes: 0,
            shares: 0
        }

        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addMessage(text) {
        let newMessage = {
            id: this._state.dialogsPage.dialogsData[5].id,
            text: this._state.dialogsPage.newMessageText,
            age: this._state.dialogsPage.dialogsData[5].age
        }
        this._state.dialogsPage.messagesData.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);

    }
}


window.state = store;

export default store;