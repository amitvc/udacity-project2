/**
 * Created by amit on 10/1/17.
 */


import React from 'react';
import {connect} from 'react-redux';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField';
import {onPostDialogClosed,updatePostOnServer} from '../actions/PostsAction';
import {bindActionCreators} from 'redux';


/**
 * Dialog box to edit and make new posts.
 */
class PostDialog extends React.Component {



    submitEditedPost(){

    }


    render() {
        const {id, title, body, openPostDialog, onPostDialogClosed, updatePostOnServer}  = this.props;

        return (
            <Dialog
                title="Edit Post"
                open={openPostDialog}
                autoDetectWindowHeight={true}
                onRequestClose={onPostDialogClosed}
                autoScrollBodyContent={true}
                modal={false}>
                <TextField
                    ref="title"
                    required autoFocus
                    floatingLabelText="Title"
                    defaultValue={title}
                />
                <br/>
                <TextField
                    ref="body"
                    required fullWidth
                    floatingLabelText="Body"
                    defaultValue={body}
                    multiLine={true}
                    rows={1}
                    rowsMax={2}
                />
                <br/>
                <RaisedButton
                    label='Submit'
                    primary={true}
                    keyboardFocused={true}
                    onClick={() => {updatePostOnServer(id, this.refs.title.getValue(),this.refs.body.getValue())}}
                />
                <RaisedButton
                    label='Cancel'
                    secondary={true}
                    onClick={onPostDialogClosed}
                />
            </Dialog>
        )

    }
}

const mapStateToProps =  (state) => {
    return {
        openPostDialog: state.posts.openPostDialog,
        title : state.posts.title,
        body: state.posts.body,
        id : state.posts.id
    };
}


const mapDispatchToProps = (dispatch) => {
    return {
        onPostDialogClosed: bindActionCreators(onPostDialogClosed, dispatch),
        updatePostOnServer: bindActionCreators(updatePostOnServer, dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (PostDialog);