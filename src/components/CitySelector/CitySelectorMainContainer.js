import React from 'react';
import { connect } from 'react-redux';
import { changeCityAction } from "../../actions/cityActions";
import CitySelector from './CitySelector';
import httpGet from "../../utils/httpGet";

export const CitySelectorMainContainer = class extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isActive: false, cityOptions: [] }
    }

    inputSearch = (str) => {
        if (str.length > 1) {
            httpGet('https://localhost:5001/api/Search/' + str).then(
                response => {
                    //fix backend
                    this.setState({cityOptions: JSON.parse(response).cities.slice(1)});
                },
                error => {
                    const errorText = error.code ? error.code : 'no server answer';
                    alert(`Rejected: ${errorText}`);
                }
            );
        }
    };

    handleOpenClick = (event) => {
        if (
            event.target.classList.contains('citySelector') ||
            event.target.classList.contains('citySelector__current')
        ) {
            this.setState({isActive: !this.state.isActive, cityOptions: []})
        }
    };

    handleSelectClick = (event) => {
        this.props.changeCityAction(event.target.innerHTML);
        this.setState({isActive: !this.state.isActive, cityOptions: []});
    };

    render() {
        return (
            <CitySelector
                isActive={this.state.isActive}
                cityOptions={this.state.cityOptions}
                globalCity={this.props.globalCity}
                inputSearch={this.inputSearch}
                handleOpenClick={this.handleOpenClick}
                handleSelectClick={this.handleSelectClick}
            />
        );
    }
};

const mapStateToProps = (store) => ({
    globalCity: store.cityState,
});

export default connect(
    mapStateToProps,
    { changeCityAction },
)(CitySelectorMainContainer)