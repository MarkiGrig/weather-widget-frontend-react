import React from "react";
import {connect} from "react-redux";
import LogIn from "./LogIn";
import { togglePopupAction } from "../../../actions/popupActions";

export const LogInContainer = class extends React.Component {
    handleClick = () => {
        if (!this.props.isPopupActive)
            this.props.togglePopupAction();
    };

    render() {
        return(
            <LogIn togglePopup={ this.handleClick } />
        );
    }
};

const mapStateToProps = (store) => ({
    isLoggedIn: store.loginState,
    isPopupActive: store.popupState
});

export default connect(
    mapStateToProps,
    { togglePopupAction },
)(LogInContainer)