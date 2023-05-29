//redux-core

// import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension'
// import rootReducer from './reducers';

// const combineReducers = composeWithDevTools();

// const store = createStore(rootReducer, combineReducers);
// export default store;

//redux-toolkit

import { configureStore } from '@reduxjs/toolkit';
import FiltersSlice from '../Filters/filtersSlice';
import todoListSlice from '../TodoList/todoListSlice';
const store = configureStore({
    reducer: {
        filters: FiltersSlice.reducer,
        todoList: todoListSlice.reducer
    },
});
export default store;