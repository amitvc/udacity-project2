/**
 * Created by amit on 10/1/17.
 */

// API calls needed to make server requests to update, create, delete comments
import {editComment, createComment, getComments, deleteComment} from '../api';
import {UPDATE_EXISTING_COMMENT, DELETE_COMMENT,
        CREATE_NEW_COMMENT,COMMENT_DIALOG_CLOSED_CLICKED,
        LOAD_COMMENTS,EDIT_COMMENT_CLICKED,OPEN_CREATE_COMMENT_DIALOG
        } from './Constants';




export const onCommentDialogClosed = () => {
    return {
        type: COMMENT_DIALOG_CLOSED_CLICKED
    }
}

export const onCreateNewCommentButtonClicked = (parentId) => {
    return {
        type:OPEN_CREATE_COMMENT_DIALOG,
        parentId
    }
}

export const updateCommentOnServer = (comment) => dispatch => {
    editComment(comment.id, comment.body).then( comment => {
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

export const onEditCommentClicked = (comment) => {
    return {
        type: EDIT_COMMENT_CLICKED,
        comment
    }
}






