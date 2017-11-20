import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';

const reducer = (state = {}, action) => { 
    switch (action.type) {
        case 'ADD_COMMENT':
            return {...state, commnetsCount: state.commnetsCount + 1};
        default:return state;
    }
};

const store = createStore(reducer, {commnetsCount: 0});

console.log(store.getState());

const action = {
    type: 'ADD_COMMENT'
};

store.dispatch(action);
console.log(store.getState());





ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
