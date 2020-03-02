import React from 'react';
import { connect } from 'react-redux';
import { changeCityAction } from "../../actions/cityActions";
import CitySelector from './CitySelector';
import {
    removeCitySearcherAction,
    addCitySearcherAction,
    deleteAllCitySearchersAction
} from '../../actions/citySearcherActions';
import httpGet from "../../utils/httpGet";

export const CitySelectorContainer = class extends React.Component {
    id;

    constructor(props) {
        super(props);
        this.id = 'main';

        props.addCitySearcherAction({
            id: this.id,
            cityName: this.props.globalCity.name,
            cityId: this.props.globalCity.id,
            searchLine: '',
            suitableCities: []
        });
    }

    inputSearchLine = (str) => {
        const { props } = this;
        if (str.length > 2) {
            httpGet('https://localhost:5001/api/Search/' + str).then(
                response => {
                    alert(response);
                },
                error => {
                    alert(`Rejected: ${error.code}`);
                }
            );
        }
    };

    render() {
        return (
            <div>
                <CitySelector onkeyupSearch={this.inputSearchLine}/>
            </div>
        );
    }
};

const mapStateToProps = (store) => ({
    globalCity: store.cityState,
    searcher: store.citySearcherState.filter((id) => id === this.id)
});

export default connect(
    mapStateToProps,
    {
        removeCitySearcherAction,
        addCitySearcherAction,
        deleteAllCitySearchersAction,
        changeCityAction
    },
)(CitySelectorContainer)