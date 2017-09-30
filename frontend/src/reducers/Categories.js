/**
 * Created by amit on 9/24/17.
 */

import {LOAD_CATEGORIES, SELECT_CATEGORY} from '../actions/Constants';



const initialCategories = [];

function categories (state = initialCategories, action) {

    switch (action.type) {
        case LOAD_CATEGORIES:
            let {categories} = action;
            return {
                ...state,
                categories: categories
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