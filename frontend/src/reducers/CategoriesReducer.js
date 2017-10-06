/**
 * Created by amit on 9/24/17.
 */

import {LOAD_CATEGORIES,LOAD_SELECTED_CATEGORY} from '../actions/Constants';



const initialCategoriesState = {
    selectedCategory: null,
    categories: [{name:'All Posts', path:'All Posts'}]
};


function categories (state = initialCategoriesState, action) {

    switch (action.type) {
        case LOAD_CATEGORIES:
            let {categories} = action;
            let newCategories = state.categories.filter((cat) => {return cat.name !== 'All Posts'});
            newCategories.push({name:'All Posts', path:'All Posts'});
            action.categories.forEach((cat) => {
               newCategories.push(cat);
            });
            return {
                ...state,
                categories: newCategories
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