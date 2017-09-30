/**
 * Created by amit on 9/24/17.
 */
import {LOAD_SELECTED_CATEGORY_POSTS} from '../actions/Constants';

const initialPostState =  {
    posts : []
}


function posts (state = initialPostState, action) {
    switch (action.type) {


        case LOAD_SELECTED_CATEGORY_POSTS:
            const posts = action.posts;
            console.log("Inside "+JSON.stringify(action.posts) + " posts "+ JSON.stringify(posts));
            return {
                ...state,
                posts:posts
            };

        default:
            return state;

    }

}

export default posts;