/**
 * Created by amit on 10/1/17.
 */


import React from 'react';
import {connect} from 'react-redux';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField';
import {onPostDialogClosed} from '../actions/PostsAction';
import {bindActionCreators} from 'redux';


/**
 * Dialog box to edit and make new posts.
 */
class PostDialog extends React.Component {



    submitEditedPost(){

    }


    render() {
        const {title, body, author, openPostDialog, onPostDialogClosed}  = this.props;

        return (
            <Dialog
                title="Edit Post"
                open={openPostDialog}
                autoDetectWindowHeight={true}
                onRequestClose={onPostDialogClosed}
                autoScrollBodyContent={true}
                modal={false}>
                <TextField
                    required autoFocus
                    floatingLabelText="Title"
                    defaultValue={title}
                />
                <br/>
                <TextField
                    required fullWidth
                    floatingLabelText="Body"
                    defaultValue={body}
                    multiLine={true}
                    rows={1}
                    rowsMax={2}
                />
                <br/>
                <TextField
                    required fullWidth
                    floatingLabelText="Author"
                    defaultValue={author}
                />
                <br />
                <RaisedButton
                    label='Submit'
                    primary={true}
                    keyboardFocused={true}
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
        author: state.posts.author
    };
}


const mapDispatchToProps = (dispatch) => {
    return {
        onPostDialogClosed: bindActionCreators(onPostDialogClosed, dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (PostDialog);