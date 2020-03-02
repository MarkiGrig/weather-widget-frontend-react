import React from 'react';
import './App.scss';
import CitySelectorContainer from "./components/CitySelector/CitySelectorContainer";
import { connect } from 'react-redux';


const App = () => {
  return (
      <div>
        <CitySelectorContainer />
      </div>
  );
};

export default App;
