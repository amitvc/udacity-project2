/**
 * Created by amit on 9/24/17.
 */

import {LOAD_CATEGORIES} from '../actions/Constants';

const initialCategoriesState = [

    {
        id: 11111,
        title:"react"
    },
    {
        id: 22222,
        title:"redux"
    },
    {
        id: 33333,
        title:"udacity"
    },

];

function categories (state = initialCategoriesState, action) {

    switch (action.type) {


        case LOAD_CATEGORIES:
            return {
                ...state,
                categories: action.categories
            }

        default:
            return state;

    }

}

export default categories;