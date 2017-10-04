/**
 * Created by amit on 9/24/17.
 */


import {CREATE_NEW_COMMENT,OPEN_CREATE_COMMENT_DIALOG, LOAD_COMMENTS, UPDATE_EXISTING_COMMENT, DELETE_COMMENT,EDIT_COMMENT_CLICKED, COMMENT_DIALOG_CLOSED_CLICKED} from '../actions/Constants';



const initialCommentsState =  {
    comments : [],
    openCommentEditDialogFlag : false,
    openCommentAddDialogFlag : false,
    id: "",
    postId:"",
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

        case EDIT_COMMENT_CLICKED:
            return {
                ...state,
                openCommentEditDialogFlag: true,
                id:action.comment.id,
                postId: action.comment.postId,
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
                openCommentAddDialogFlag:true

            };

        default:
            return state;
    }
}


export default comments;