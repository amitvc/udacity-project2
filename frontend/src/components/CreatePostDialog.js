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
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';




/**
 * Dialog box to create new posts
 */
class CreatePostDialog extends React.Component {


    constructor(props) {

        super(props);
        this.state = {
            categorySelected: undefined
        }
    }


    isInvalid(post) {
        let invalid = false;
        if(!post.author || post.author.trim() === '') {
            invalid = true;
        }

        if(!post.title || post.title.trim() === '') {
            invalid = true;
        }

        if(!post.body || post.body.trim() === '') {
            invalid = true;
        }
        if(post.category === undefined) {
            invalid = true;
        }
        return invalid;
    }


    handleCategorySelected  = (event, index, value) => {
        this.setState({categorySelected:value})
    }

    render() {

        const {openPostCreateDialogFlag,onPostDialogClosed, createPostOnServer, categories} = this.props;
        let isInvalid = this.isInvalid;
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
                <SelectField
                        floatingLabelText="Categories"
                        value={this.state.categorySelected}
                        onChange={this.handleCategorySelected}>
                    {
                        categories.map((cat) => {
                            return <MenuItem key={`${cat.path}`} value={`${cat.path}`} primaryText={`${cat.path}`}/>;
                        })
                    }


                </SelectField>
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
                            category: this.state.categorySelected
                        }
                        if(!isInvalid(post)) {
                            createPostOnServer(post);
                        } else {
                            alert("Please fill in the details");
                        }
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
        createPostOnServer: bindActionCreators(createPostOnServer, dispatch),
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (CreatePostDialog);