/**
 * Created by amit on 9/28/17.
 */

import {LOAD_SELECTED_CATEGORY_POSTS} from './Constants';


export const loadPostsBySelectedCategory = (posts)  => {
    return {
        type: LOAD_SELECTED_CATEGORY_POSTS,
        posts
    }
}