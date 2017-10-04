/**
 * Created by amit on 10/3/17.
 */
/**
 * Created by amit on 10/1/17.
 */


import React from 'react';
import {connect} from 'react-redux';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField';
import {updateCommentOnServer, onCommentDialogClosed} from '../actions/CommentsAction';
import {bindActionCreators} from 'redux';


/**
 * Dialog box to edit existing comments.
 */
class EditCommentDialog extends React.Component {

    render() {
        const {id, parentId,author, body, openCommentEditDialogFlag, onCommentDialogClosed, updateCommentOnServer}  = this.props;

        return (
            <Dialog
                title="Edit Comment"
                open={openCommentEditDialogFlag}
                autoDetectWindowHeight={true}
                onRequestClose={onCommentDialogClosed}
                autoScrollBodyContent={true}
                modal={false}>
                <TextField
                    ref="author"
                    required autoFocus
                    floatingLabelText="Author"
                    defaultValue={author}
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
                    onClick={() => {
                     const comment = {id,
                     parentId,
                     author:this.refs.author.getValue(),
                     body: this.refs.body.getValue()}
                     updateCommentOnServer(comment);
                     }}
                />
                <RaisedButton
                    label='Cancel'
                    secondary={true}
                    onClick={onCommentDialogClosed}
                />
            </Dialog>
        )

    }
}

const mapStateToProps =  (state) => {
    return {
        openCommentEditDialogFlag: state.comments.openCommentEditDialogFlag,
        author : state.comments.author,
        body: state.comments.body,
        parentId : state.comments.parentId,
        id: state.comments.id,
        voteScore : state.comments.voteScore
    };
}


const mapDispatchToProps = (dispatch) => {
    return {
        onCommentDialogClosed: bindActionCreators(onCommentDialogClosed, dispatch),
        updateCommentOnServer: bindActionCreators(updateCommentOnServer, dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (EditCommentDialog);