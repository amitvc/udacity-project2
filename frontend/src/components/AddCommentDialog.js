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
import {onCommentDialogClosed,createNewCommentOnServer} from '../actions/CommentsAction';
import {bindActionCreators} from 'redux';


/**
 * Dialog box to create new comments
 */
class AddCommentDialog extends React.Component {

    render() {

        const {openCommentAddDialogFlag,onCommentDialogClosed, createNewCommentOnServer , postId} = this.props;

        return (
            <Dialog
                title="Add New Comment"
                open={openCommentAddDialogFlag}
                autoDetectWindowHeight={true}
                onRequestClose={onCommentDialogClosed}
                autoScrollBodyContent={true}
                modal={false}>

                <TextField
                    ref="author"
                    required autoFocus
                    floatingLabelText="Author"
                />
                <br/>
                <TextField
                    ref="body"
                    required fullWidth
                    floatingLabelText="Body"
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
                        const comment = {
                            author:this.refs.author.getValue(),
                            body: this.refs.body.getValue(),
                            parentId:postId
                        }
                        console.log("About to create comment " +JSON.stringify(comment));
                        createNewCommentOnServer(comment);
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

const mapStateToProps = (state) => {
    return {
        postId : state.comments.postId,
        openCommentAddDialogFlag : state.comments.openCommentAddDialogFlag
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onCommentDialogClosed: bindActionCreators(onCommentDialogClosed, dispatch),
        createNewCommentOnServer: bindActionCreators(createNewCommentOnServer, dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (AddCommentDialog);