import React from "react";
import profilePageReducer, {addPost} from "./profilePageReducer";

    it('test ProfilePage Reduser', () => {

        let action = addPost("test text for tests");

        let state = {
            postsData: [
                { id: 1, postMessage: "Hi, how are you?", likes: 2, shares: 12 },
                { id: 2, postMessage: "Thank I'm OK!", likes: 13, shares: 32 },
                { id: 3, postMessage: "When u'll come home?", likes: 24, shares: 2 },
                { id: 4, postMessage: "Next week, I guess...", likes: 4, shares: 1 },
                { id: 5, postMessage: "When u'll come home?", likes: 24, shares: 2 },
                { id: 6, postMessage: "Next week, I guess...", likes: 4, shares: 1 },
                { id: 7, postMessage: "When u'll come home?", likes: 24, shares: 2 },
                { id: 8, postMessage: "Next week, I guess...", likes: 4, shares: 1 }
            ]};

        let newState = profilePageReducer(state, action);

        expect(newState.postsData.length).toBe(9);
    })