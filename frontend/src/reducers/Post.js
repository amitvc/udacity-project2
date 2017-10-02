/**
 * Created by amit on 9/24/17.
 */
import {LOAD_SELECTED_CATEGORY_POSTS,
        OPEN_EDIT_POST,POST_DIALOG_CLOSED_CLICKED,
        UP_VOTE_POST,DOWN_VOTE_POST,
        UPDATE_POST, DELETE_POST} from '../actions/Constants';
import {votePost} from '../api/index'

const initialPostState =  {
    posts : [],
    openPostDialog : false,
    id: "",
    author:"",
    body:"",
    title:"",
    voteScore:1
}


function posts (state = initialPostState, action) {
    switch (action.type) {
        case LOAD_SELECTED_CATEGORY_POSTS:
            const posts = action.posts;
            return {
                ...state,
                posts:posts
            };

        case OPEN_EDIT_POST:
            const post = action.post;
            return {
                ...state,
                openPostDialog: true,
                author:post.author,
                title:post.title,
                body:post.body,
                id: post.id
            };

        case POST_DIALOG_CLOSED_CLICKED:
            return {
                ...state,
                openPostDialog:false
            };

        case UP_VOTE_POST:
            let newPosts = state.posts.filter((post) => post.id !== action.post.id);
            newPosts.push(action.post);
            return {
                ...state,
                posts: newPosts
            };

        case DOWN_VOTE_POST:
            newPosts = state.posts.filter((post) => post.id !== action.post.id);
            newPosts.push(action.post);
            return {
                ...state,
                posts: newPosts
            };

        case UPDATE_POST:
            newPosts = state.posts.filter((post) => post.id !== action.post.id);
            newPosts.push(action.post);
            return {
                ...state,
                posts: newPosts
            };

        case DELETE_POST:
            newPosts = state.posts.filter((post) => post.id !== action.id);
            return {
                ...state,
                posts:newPosts
            }

        default:
            return state;
    }
}

export default posts;