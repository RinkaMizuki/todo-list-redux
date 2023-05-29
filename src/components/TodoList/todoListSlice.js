//##redux-core##

// const initialState = JSON.parse(localStorage.getItem('todoList')) ?? [];

// const TodoListSlice = (state = initialState, action) => {
//     switch (action.type) {
//         case 'todoList/addToDoAction':
//             localStorage.setItem('todoList', JSON.stringify([...state, action.payload]));
//             return [...state, action.payload];
//         case 'todoList/completedTodoAction':
//             const newTodoList = [...state];
//             const todoCompleted = newTodoList.find(todo => todo.id === action.payload);
//             todoCompleted.completed = !todoCompleted.completed
//             localStorage.setItem('todoList', JSON.stringify(newTodoList));
//             return newTodoList;
//         default:
//             return state;
//     }
// }
// export default TodoListSlice;

//##redux-toolkit##

import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('todoList')) ?? [];

const TodoListSlice = createSlice({
    name: 'todoList', //name này là xác định type của action
    initialState,
    reducers: {
        addToDoAction: (state, action) => {
            localStorage.setItem('todoList', JSON.stringify([...state, action.payload]));
            state.push(action.payload);
        },
        completedTodoAction: (state, action) => {
            const todoCompleted = state.find(todo => todo.id === action.payload);
            todoCompleted.completed = !todoCompleted.completed
            localStorage.setItem('todoList', JSON.stringify(state));
            return state;
        }
    }
})
export default TodoListSlice;
