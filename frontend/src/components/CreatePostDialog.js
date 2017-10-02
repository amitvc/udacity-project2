/**
 * Created by amit on 10/1/17.
 */
import React from 'react';
import {connect} from 'react-redux';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField';
import {onPostDialogClosed,createPostOnServer} from '../actions/PostsAction';
import {bindActionCreators} from 'redux';


/**
 * Dialog box to create new posts
 */
class CreatePostDialog extends React.Component {




    render() {

        const {openPostCreateDialogFlag,onPostDialogClosed, createPostOnServer} = this.props;

        return (
            <Dialog
                title="Create Post"
                open={openPostCreateDialogFlag}
                autoDetectWindowHeight={true}
                onRequestClose={onPostDialogClosed}
                autoScrollBodyContent={true}
                modal={false}>

                <TextField
                    ref="author"
                    required autoFocus
                    floatingLabelText="Author"
                />
                <br/>
                <TextField
                    ref="title"
                    required autoFocus
                    floatingLabelText="Title"
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
                        const post = {
                            author:this.refs.author.getValue(),
                            title: this.refs.title.getValue(),
                            body: this.refs.body.getValue(),
                            category: this.props.selectedCategory
                        }
                        console.log("About to create post " +JSON.stringify(post));
                        createPostOnServer(post);
                    }}
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

const mapStateToProps = (state) => {
    return {
        selectedCategory: state.categories.selectedCategory,
        openPostCreateDialogFlag : state.posts.openPostCreateDialogFlag
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onPostDialogClosed: bindActionCreators(onPostDialogClosed, dispatch),
        createPostOnServer: bindActionCreators(createPostOnServer, dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (CreatePostDialog);