import React from "react";
import Header from "./Header";
import {connect} from "react-redux";

export const HeaderContainer = class extends React.Component {
    render() {
        return(
            <Header
                isLoggedIn={this.props.isLoggedIn}
                isPopupActive={this.props.isPopupActive}
            />
        );
    }
};

const mapStateToProps = (store) => ({
    isLoggedIn: store.loginState,
    isPopupActive: store.popupState
});

export default connect(
    mapStateToProps,
    null,
)(HeaderContainer)