export const removeCitySearcherAction = (id) => ({
    type: 'REMOVE_CITY-SEARCHER',
    id
});

export const deleteAllCitySearchersAction = () => ({
    type: 'DELETE_ALL-CITY-SEARCHERS'
});

export const addCitySearcherAction = (searcher) => ({
    type: 'ADD_CITY-SEARCHER',
    searcher
});

export const updateNameCitySearcherAction = (cityName) => ({
    type: 'UPDATE-NAME_CITY-SEARCHER',
    cityName
});