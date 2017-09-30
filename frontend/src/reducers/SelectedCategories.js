/**
 * Created by amit on 9/30/17.
 */

import {SELECT_CATEGORY} from '../actions/Constants';


const initialSelectedCategory = null;

function selectedCategory (state = initialSelectedCategory, action) {

    switch (action.type) {
        case SELECT_CATEGORY:
            let {selectedCategory} = action;

            return  {
                ...state,
                selectedCategory
            }

        default:
            return state;

    }

}

export default selectedCategory;