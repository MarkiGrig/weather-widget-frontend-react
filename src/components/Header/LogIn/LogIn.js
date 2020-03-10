import React from "react";
import PopupContainer from "../../Popup/PopupContainer";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";

const LogIn = (props) => {
    return(
        <div className={'login'} onClick={props.togglePopup}>
            <Link to='/login' className={'login__title'}>Вход / Регистрация</Link>
            <Switch>
                <Route path='/login'>
                    <PopupContainer />
                </Route>
            </Switch>
        </div>
    );
};

export default LogIn;