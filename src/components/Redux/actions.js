// import { bindActionCreators } from 'redux';
// import store from './store';
// const addToDoAction = data => ({
//     type: 'todoList/addToDoAction',
//     payload: data,
// })

// const filtersSearchTodoAction = text => ({ type: 'filters/filtersSearchTodoAction', payload: text, })

// const filtersStatusTodoAction = status => ({ type: 'filters/filtersStatusTodoAction', payload: status });

// const filtersPriorityTodoAction = priority => ({
//     type: 'filters/filtersPriorityTodoAction', payload: priority,
// });

// const completedTodoAction = todoId => ({ type: 'todoList/completedTodoAction', payload: todoId })

// //action creator
// const boundToDoAction = bindActionCreators({
//     add: addToDoAction,
//     filtersSearch: filtersSearchTodoAction,
//     filtersStatus: filtersStatusTodoAction,
//     filtersPriority: filtersPriorityTodoAction,
//     todoId: completedTodoAction,
// }, store.dispatch)
// export default boundToDoAction;