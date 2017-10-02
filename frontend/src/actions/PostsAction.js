/**
 * Created by amit on 9/28/17.
 */

import {LOAD_SELECTED_CATEGORY_POSTS,
        OPEN_EDIT_POST,
        POST_DIALOG_CLOSED_CLICKED,
        UP_VOTE_POST, DOWN_VOTE_POST,
        UPDATE_POST,DELETE_POST,
        CREATE_NEW_POST, OPEN_CREATE_POST_DIALOG} from './Constants';
import {
    votePost,
    editPost,
    deletePost,
    createPost
} from '../api';


export const loadPostsBySelectedCategory = (posts)  => {
    return {
        type: LOAD_SELECTED_CATEGORY_POSTS,
        posts
    }
}

export const onEditPostClicked = (post) => {
    return {
        type: OPEN_EDIT_POST,
        post
    }
}

export const onPostDialogClosed = () => {
    return {
        type: POST_DIALOG_CLOSED_CLICKED
    }
}

export const upVotePost = (post) => {
    return {
        type: UP_VOTE_POST,
        post
    }
}

export const updateUpVotePost = (id) => dispatch => {
    votePost(id, "upVote")
        .then(post => dispatch(upVotePost(post)));
}

export const updateDownVotePost = (id) => dispatch => {
    votePost(id, "downVote")
        .then(post => dispatch(downVotePost(post)));
}


export const updatePostOnServer = (id, title, body) => dispatch => {

    editPost(id, title,body)
        .then(post => {
            console.log(post);
            dispatch(updatePostLocal(post));
            dispatch(onPostDialogClosed());
        });
}

export const createPostOnServer = (post) => dispatch => {
    createPost(post).then( post => {
        console.log("Post created on Server");
        dispatch(createNewPost(post));
        dispatch(onPostDialogClosed());
    });
}

export const createNewPost = (post) => {
    return {
        type:CREATE_NEW_POST,
        post
    }
}

export const openCreateNewPostDialog = () => {
    return {
        type:OPEN_CREATE_POST_DIALOG
    }
}


export const deletePostOnServer = (id) => dispatch => {
    deletePost(id)
        .then(() => dispatch(deletePostLocal(id)));
}


export const updatePostLocal = (post) => {
    return {
        type: UPDATE_POST,
        post
    }
}

export const deletePostLocal = (id) => {
    return {
        type: DELETE_POST,
        id
    }
}


export const downVotePost = (post) => {
    return {
        type: DOWN_VOTE_POST,
        post
    }
}