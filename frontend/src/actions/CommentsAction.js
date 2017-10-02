/**
 * Created by amit on 10/1/17.
 */

// API calls needed to make server requests to update, create, delete comments
import {editComment, createComment, voteComment, getComments, deleteComment} from '../api';
import {UPDATE_EXISTING_COMMENT, DELETE_COMMENT, CREATE_NEW_COMMENT, UP_VOTE_COMMENT, DOWN_VOTE_COMMENT, LOAD_COMMENTS} from './Constants';




export const updateCommentOnServer = (comment) => dispatch => {
    editComment(comment.id, comment).then( comment => {
        dispatch(updateComment(comment));
    });
}

export const updateComment = (comment) => {
    return {
        type: UPDATE_EXISTING_COMMENT,
        comment
    }
}

export const createNewCommentOnServer = (comment) => dispatch => {
    createComment(comment).then(comment => {
        dispatch(createNewComment(comment));
    });
}

export const createNewComment = (comment) => {
    return {
        type: CREATE_NEW_COMMENT,
        comment
    }
}

export const upVoteCommentOnServer = (id) => dispatch => {
    voteComment(id, 'upVote').then( comment => {
        dispatch(updateComment(comment));
    });
}

export const downVoteCommentOnServer = (id) => dispatch => {
    voteComment(id, 'downVote').then( comment => {
       dispatch(updateComment(comment));
    });
}

export const deleteCommentOnServer = (id) => dispatch => {
    deleteComment(id).then(() => {
       dispatch(deleteCommentLocal(id));
    });
}

export const deleteCommentLocal = (id) => {
    return {
        type: DELETE_COMMENT,
        id
    }
}

export const getCommentsFromServer = (id) => dispatch => {
    getComments(id).then(comments => {
        dispatch(loadComments(comments));
    });
}

export const loadComments = (comments) => {
    return {
        type: LOAD_COMMENTS,
        comments
    }
}






