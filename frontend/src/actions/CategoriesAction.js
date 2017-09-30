/**
 * Created by amit on 9/27/17.
 */


import {getCategories, getPostsByCategory} from '../api';
import {LOAD_CATEGORIES, LOAD_SELECTED_CATEGORY,LOAD_SELECTED_CATEGORY_POSTS} from '../actions/Constants';
import {loadPostsBySelectedCategory} from '../actions/PostsAction';


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
    const {categories} = state.categories;
    if(categories != undefined && categories.length > 0) {
        categories.selectedCategory = categories[0].name;
        dispatch(fetchPostsByCategory(categories.selectedCategory));
    }
}

export const fetchPostsByCategory = (selectedCategory) => (dispatch) => {
    console.log("Selected category " + selectedCategory);
    return getPostsByCategory(selectedCategory)
        .then( (posts) =>  {
            dispatch(selectCategory(selectedCategory));
            console.log("Calling loadPostsBySelectedCategory " + JSON.stringify(posts));
            dispatch(loadPostsBySelectedCategory(posts))

        });
}


export const  selectCategory = (selectedCategory)  => {
    return {
        type: LOAD_SELECTED_CATEGORY,
        selectedCategory
    }
}


export const  loadCategory= (categories) => {
    console.log("loadCat");
    return {
        type: LOAD_CATEGORIES,
        categories
    }
}

