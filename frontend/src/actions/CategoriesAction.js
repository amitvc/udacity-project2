/**
 * Created by amit on 9/27/17.
 */


import {getCategories, getPostsByCategory} from '../api';
import {LOAD_CATEGORIES,SELECT_CATEGORY} from '../actions/Constants';


export const fetchCategories = () => (dispatch) => {
    console.log("Calling fetchCat");
    return getCategories()
        .then((categories) => {
            console.log("Categories" + categories);
            dispatch(loadCategory(categories));
        })
}

export const displayDefaultCategory = () => (dispatch, getState) => {
    const state = getState();
    const categories = state.categories;
    if(categories != undefined && categories.length > 0) {
        state.selectedCategory = categories[0].name;
        fetchPostsByCategory(state.selectedCategory);
    }
}

export const fetchPostsByCategory = (selectedCategory) => (dispatch) => {
    return getPostsByCategory(selectedCategory)
        .then(posts => dispatch({
            type: SELECT_CATEGORY,
            selectedCategory,
            posts
        }))
}


export default function loadCategory(categories) {
    console.log("loadCat");
    return {
        type: LOAD_CATEGORIES,
        categories
    }
}

