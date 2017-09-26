/**
 * Created by amit on 9/24/17.
 */
import {LOAD_POSTS} from '../actions/Constants';

const initialPosts = [];

function posts (state = initialPosts, action) {
    switch (action.type) {
        case LOAD_POSTS:
            return {
                ...state,
                posts: action.posts
            }

        default:
            return state;

    }

}

export default posts;