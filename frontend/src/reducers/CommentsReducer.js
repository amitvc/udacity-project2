/**
 * Created by amit on 9/24/17.
 */


import {CREATE_NEW_COMMENT,OPEN_CREATE_COMMENT_DIALOG, LOAD_COMMENTS, UPDATE_EXISTING_COMMENT, DELETE_COMMENT,EDIT_COMMENT_CLICKED, COMMENT_DIALOG_CLOSED_CLICKED} from '../actions/Constants';



const initialCommentsState =  {
    comments : [],
    openCommentEditDialogFlag : false,
    openCommentAddDialogFlag : false,
    id: "",
    parentId:"",
    author:"",
    body:"",
    voteScore:1
}

function comments (state = initialCommentsState, action) {

    switch(action.type) {

        case LOAD_COMMENTS:
            return {
                ...state,
                comments: action.comments
            };

        case UPDATE_EXISTING_COMMENT:
            let newEditComments = state.comments.filter((comment) => comment.id !== action.comment.id);
            newEditComments.push(action.comment);
            return {
                ...state,
                openCommentEditDialogFlag:false,
                comments: newEditComments
            };

        case DELETE_COMMENT:
            let leftOverComments = state.comments.filter((comment) => comment.id !== action.id);
            return {
                ...state,
                comments: leftOverComments
            };

        case EDIT_COMMENT_CLICKED:
            return {
                ...state,
                openCommentEditDialogFlag: true,
                id:action.comment.id,
                parentId: action.comment.parentId,
                author : action.comment.author,
                body : action.comment.body,
                voteScore : action.comment.voteScore
            };
        case COMMENT_DIALOG_CLOSED_CLICKED:
            return {
                ...state,
                openCommentAddDialogFlag:false,
                openCommentEditDialogFlag:false

            };
        case OPEN_CREATE_COMMENT_DIALOG:
            return {
                ...state,
                openCommentAddDialogFlag:true,
                parentId: action.parentId

            };
        case CREATE_NEW_COMMENT :
            let newComments = state.comments.filter((comment) => comment.id !== action.comment.id);
            newComments.push(action.comment);
            return {
                ...state,
                openCommentAddDialogFlag:false,
                comments: newComments
            };


        default:
            return state;
    }
}


export default comments;