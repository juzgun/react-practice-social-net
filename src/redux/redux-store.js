import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./authReduser";
import dialogsPageReducer from "./dialogsPageReducer";
import profilePageReducer from "./profilePageReducer";
import usersPageReducer from "./usersPageReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
    form: formReducer
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;