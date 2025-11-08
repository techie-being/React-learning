import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoslice'
export const Store = configureStore({
    reducer:todoReducer,
});