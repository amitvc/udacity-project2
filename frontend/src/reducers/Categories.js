/**
 * Created by amit on 9/24/17.
 */

import {LOAD_CATEGORIES, SELECT_CATEGORY} from '../actions/Constants';



const initialCategoriesState = {
    categories:[],
    selectedCategory: undefined

};

function categories (state = initialCategoriesState, action) {

    switch (action.type) {
        case LOAD_CATEGORIES:
            let {categories} = action;
            return {
                categories
            }
            break;

        case SELECT_CATEGORY:
            let {category} = action;

            return  {
                ...state,
                selectedCategory : category
            }

        default:
            return state;

    }

}

export default categories;