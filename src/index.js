import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.scss';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import cityReducer from "./reducers/cityReducer";
import citySearchReducer from "./reducers/citySearchReducer";

const reducers = combineReducers({
    citySearchState: citySearchReducer,
    cityState: cityReducer
});

const initialState = {
    citySearchState: '',
    cityState: {
        name: 'Пермь',
        id: 511196 //Perm Id from database
    }
};

/* eslint-disable no-underscore-dangle */
const store = createStore(
    reducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

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
