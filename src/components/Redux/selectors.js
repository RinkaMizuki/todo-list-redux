import { createSelector } from 'reselect';

const todoListSelector = state => state.todoList;
const filtersSearchSelector = state => state.filters.search;
const filtersStatusSelector = state => state.filters.status;
const filtersPrioritySelector = state => state.filters.priority;

const todoRemaining = createSelector(todoListSelector, filtersSearchSelector, filtersStatusSelector, filtersPrioritySelector, (todoList, searchText, statusSelector, prioritySelector) => {
    return todoList.filter(todo => {
        if (statusSelector === 'All') {
            return prioritySelector.length ? todo.name.includes(searchText) && prioritySelector.includes(todo.priority) : todo.name.includes(searchText);
        }
        return prioritySelector.length ? todo.name.includes(searchText) && (statusSelector === 'Completed' ? todo.completed : !todo.completed) && prioritySelector.includes(todo.priority) : todo.name.includes(searchText) && (statusSelector === 'Completed' ? todo.completed : !todo.completed);
    })
})

export default todoRemaining;