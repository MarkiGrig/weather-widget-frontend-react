import React from 'react';
import ReactDOM from 'react-dom';
import './style/globalStyle.scss';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import cityReducer from "./reducers/cityReducer";
import citySearcherReducer from "./reducers/citySearcherReducer";
import popupReducer from "./reducers/popupReducer";
import loginReducer from "./reducers/loginReducer";

const reducers = combineReducers({
    citySearcherState: citySearcherReducer,
    cityState: cityReducer,
    popupState: popupReducer,
    loginState: loginReducer
});

const initialState = {
    citySearcherState: [],
    cityState: 'Пермь',
    popupState: false,
    loginState: false
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
        <Router>
            <Route path='/' component={App} />
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
