//##redux-core##

// const initialState = {
//     search: '',
//     status: 'All',
//     priority: [],
// };
// const FiltersSlice = (state = initialState, action) => {
//     switch (action.type) {
//         case 'filters/filtersSearchTodoAction':
//             return {
//                 ...state,
//                 search: action.payload,
//             }
//         case 'filters/filtersStatusTodoAction':
//             return {
//                 ...state,
//                 status: action.payload,
//             }
//         case 'filters/filtersPriorityTodoAction':
//             return {
//                 ...state,
//                 priority: action.payload,
//             }
//         default:
//             return state;
//     }
// }
// export default FiltersSlice;

//##redux-toolkit##

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    search: '',
    status: 'All',
    priority: [],
};

const FiltersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        filtersSearchTodoAction: (state, action) => {
            state.search = action.payload; //vì redux-toolkit có hỗ trợ sẵn library IMMER nên ta có thể update state trực tiếp mà không cần bảo lưu lại state
        },
        filtersStatusTodoAction: (state, action) => {
            state.status = action.payload;
        },
        filtersPriorityTodoAction: (state, action) => {
            state.priority = action.payload;
        }
    }
});


export default FiltersSlice;