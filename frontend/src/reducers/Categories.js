/**
 * Created by amit on 9/24/17.
 */

import {LOAD_CATEGORIES, LOAD_SELECTED_CATEGORY_POSTS,LOAD_SELECTED_CATEGORY} from '../actions/Constants';



const initialCategoriesState = {
    selectedCategory: null,
    categories: []
};


function categories (state = initialCategoriesState, action) {

    switch (action.type) {
        case LOAD_CATEGORIES:
            let {categories} = action;
            return {
                ...state,
                categories: categories
            };


        case LOAD_SELECTED_CATEGORY:
            let {selectedCategory} = action;
            let s = {...state,
                selectedCategory :selectedCategory};
            return s;

        default:
            return state;

    }

}

export default categories;