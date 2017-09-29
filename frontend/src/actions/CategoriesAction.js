/**
 * Created by amit on 9/27/17.
 */


import {getCategories, getPostsByCategory} from '../api';
import {LOAD_CATEGORIES,SELECT_CATEGORY} from '../actions/Constants';


export const fetchCategories = () => (dispatch) => (
    getCategories()
        .then((categories) => {
             dispatch(loadCategory(categories));
        })
);

export const displayDefaultCategory = () => (dispatch, getState) => {
    const state = getState();
    const categories = state.categories.categories;
    if(categories != undefined && categories.length > 0) {
        state.selectedCategory = categories[0].name;
        fetchPostsByCategory(state.selectedCategory);
    }
}

export const fetchPostsByCategory = (selectedCategory) => (dispatch) => {
    console.log("Calling fetchPostsByCategories");
    return getPostsByCategory(selectedCategory)
        .then(posts => dispatch({
            type: SELECT_CATEGORY,
            selectedCategory,
            posts
        }))
}


export default function loadCategory(categories) {
    return {
        type: LOAD_CATEGORIES,
        categories
    }
}

