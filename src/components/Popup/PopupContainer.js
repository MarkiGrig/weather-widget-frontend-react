import React from "react";
import { connect } from 'react-redux';
import Popup from "./Popup";
import { togglePopupAction } from "../../actions/popupActions";

export const PopupContainer = class extends React.Component {
    togglePopup = () => {
        this.props.togglePopupAction();
    };

    render() {
        return(
            this.props.isPopupActive ?
                <Popup
                    togglePopup={ this.togglePopup }
                />
                : null
        );
    }
};

const mapStateToProps = (store) => ({
    isPopupActive: store.popupState
});

export default connect(
    mapStateToProps,
    { togglePopupAction },
)(PopupContainer)