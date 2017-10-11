/**
 * Created by amit on 9/24/17.
 */
import {LOAD_SELECTED_CATEGORY_POSTS,
        OPEN_EDIT_POST,POST_DIALOG_CLOSED_CLICKED,
        UP_VOTE_POST,DOWN_VOTE_POST,
        UPDATE_POST, DELETE_POST,
        CREATE_NEW_POST, OPEN_CREATE_POST_DIALOG, SORT_BY_TIMESTAMP,
        SORT_BY_VOTES_SCORE} from '../actions/Constants';

const initialPostState =  {
    posts : [],
    openPostEditDialogFlag : false,
    openPostCreateDialogFlag : false,
    id: "",
    author:"",
    body:"",
    title:"",
    voteScore:1,
    sortMethod: SORT_BY_TIMESTAMP
}

/**
 * Sort routing to sort posts based on timestamp or voteScore
 * @param posts
 * @param option
 * @returns {*}
 */
const sortPostsBy = (posts, option) => {
    switch (option) {
        case SORT_BY_VOTES_SCORE:
             let p = [...posts].sort((a, b) => {
                return b.voteScore - a.voteScore;
            });
            return p;
        case SORT_BY_TIMESTAMP:
            p = [...posts].sort((a, b) => {
                return b.timestamp - a.timestamp;
            });
            return p;
        default:
            return posts;
    }
}



function posts (state = initialPostState, action) {
    switch (action.type) {

        case LOAD_SELECTED_CATEGORY_POSTS:
            const posts = action.posts;
            return {
                ...state,
                posts:sortPostsBy(posts, state.sortMethod)
            };

        case OPEN_EDIT_POST:
            const post = action.post;
            return {
                ...state,
                openPostEditDialogFlag: true,
                author:post.author,
                title:post.title,
                body:post.body,
                id: post.id
            };

        case POST_DIALOG_CLOSED_CLICKED:
            return {
                ...state,
                openPostEditDialogFlag:false,
                openPostCreateDialogFlag:false
            };

        case UP_VOTE_POST:
            let newPosts = state.posts.filter((post) => post.id !== action.post.id);
            newPosts.push(action.post);
            return {
                ...state,
                posts: sortPostsBy(newPosts, state.sortMethod)
            };

        case DOWN_VOTE_POST:
            newPosts = state.posts.filter((post) => post.id !== action.post.id);
            newPosts.push(action.post);
            return {
                ...state,
                posts: sortPostsBy(newPosts, state.sortMethod)
            };

        case UPDATE_POST:
            newPosts = state.posts.filter((post) => post.id !== action.post.id);
            newPosts.push(action.post);
            return {
                ...state,
                posts: sortPostsBy(newPosts, state.sortMethod)
            };

        case DELETE_POST:
            newPosts = state.posts.filter((post) => post.id !== action.id);
            return {
                ...state,
                posts:sortPostsBy(newPosts, state.sortMethod)
            };

        case CREATE_NEW_POST:
            newPosts = state.posts.filter((post) => post.id !== action.post.id);
            newPosts.push(action.post);
            return {
                ...state,
                posts: sortPostsBy(newPosts, state.sortMethod)
            };

        case OPEN_CREATE_POST_DIALOG:
            return {
                ...state,
                openPostCreateDialogFlag:true
            };

        case SORT_BY_VOTES_SCORE:
            return {
                ...state,
                sortMethod: SORT_BY_VOTES_SCORE,
                posts : Array.from(sortPostsBy(state.posts, state.sortMethod))

            };

        case SORT_BY_TIMESTAMP:
            return {
                ...state,
                sortMethod: SORT_BY_TIMESTAMP,
                posts : Array.from(sortPostsBy(state.posts, state.sortMethod))
            };

        default:
            return state;
    }
}

export default posts;