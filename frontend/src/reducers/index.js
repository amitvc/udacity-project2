/**
 * Created by amit on 9/25/17.
 */

import {combineReducers} from 'redux';
import categories from './CategoriesReducer';
import posts from './PostReducer';
import comments from './CommentsReducer';

import { routerReducer } from 'react-router-redux'

export default combineReducers({
    categories,
    posts,
    comments,
    router: routerReducer
});
