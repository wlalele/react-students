import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {combineReducers, createStore} from 'redux';
import { loadState, saveState } from './store/localStorage';
import * as serviceWorker from './serviceWorker';
import { devToolsEnhancer } from 'redux-devtools-extension';

import students from './store/reducers/students';
import groups from './store/reducers/groups';

const rootReducer = combineReducers({ students, groups });

const store = createStore(
    rootReducer,
    loadState(),
    devToolsEnhancer()
);

store.subscribe(() => saveState(store.getState()));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
