/**
 * Created by amit on 9/24/17.
 */


import {CREATE_NEW_COMMENT, LOAD_COMMENTS, UPDATE_EXISTING_COMMENT, DELETE_COMMENT} from '../actions/Constants';



const initialCommentsState =  {
    comments : [],
    openCommentEditDialogFlag : false,
    openCommentCreateDialogFlag : false,
    id: "",
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
            }

        default:
            return state;
    }
}


export default comments;