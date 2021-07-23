import rerenderEntireTree from './../render'


let state = {
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
        ]
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
        newPostText: 'crazycow'
    }
};

window.state = state;

export let addPost = (postMessage) => {
    let newPost = {
        id: 5 + 1,
        postMessage: state.profilePage.newPostText,
        lekes: 0,
        shares: 0
    }

    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export default state;