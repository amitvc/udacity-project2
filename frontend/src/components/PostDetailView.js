/**
 * Created by amit on 10/9/17.
 */


import React from 'react';

import {Card,CardText, CardActions, CardHeader} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {onCreateNewCommentButtonClicked} from '../actions/CommentsAction';
import {withRouter} from 'react-router-dom';
import {getCommentsFromServer} from '../actions/CommentsAction';
import {onEditPostClicked, updateUpVotePost, updateDownVotePost, deletePostOnServer} from '../actions/PostsAction';

import CommentView from './CommentView';
import TimeAgo from 'time-ago';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ActionThumbDown from 'material-ui/svg-icons/action/thumb-down';

class PostDetailView extends React.Component {

    onEditClicked = () => {
        const {post} = this.props;
        this.props.onEditPostClicked(post);
    }

    onDeleteClicked = () => {
        this.props.deletePostOnServer(this.props.post.id);
    }

    postCommentButtonClicked = () => {
        this.props.onCreateNewCommentButtonClicked(this.props.post.id);
    }

    componentWillMount () {
        this.props.getCommentsFromServer(this.props.post.id);
    }

    render() {


        const {post} = this.props;
        const timeAgo = TimeAgo();
        const {comments} = this.props.comments;
        return (
            <Card>
                <CardHeader title={`Title : ${post.title}`}/>
                <CardText >
                    <div>Body : {post.body}</div>
                    <div>Created : {timeAgo.ago(post.timestamp)}</div>
                    <div>Votes : {post.voteScore}</div>

                </CardText>
                <CardActions>
                    <FlatButton label="Edit post" onClick={this.onEditClicked}/>
                    <FlatButton label="Delete post" onClick={this.onDeleteClicked}/>
                    <FlatButton label="Post Comment" onClick={this.postCommentButtonClicked}/>
                    <FloatingActionButton
                        mini onClick={() => this.props.updateUpVotePost(post.id)}>
                        <ActionThumbUp />
                    </FloatingActionButton>
                    <FloatingActionButton
                        mini onClick={() => this.props.updateDownVotePost(post.id)}>
                        <ActionThumbDown />
                    </FloatingActionButton>
                </CardActions>
                {
                 comments.map((comment)=> {
                 return (
                    <CommentView comment={comment} key={comment.id}/>
                    )
                 })
                 }
            </Card>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        getCommentsFromServer : bindActionCreators(getCommentsFromServer, dispatch),
        onEditPostClicked : bindActionCreators(onEditPostClicked, dispatch),
        updateUpVotePost : bindActionCreators(updateUpVotePost, dispatch),
        updateDownVotePost : bindActionCreators(updateDownVotePost, dispatch),
        deletePostOnServer : bindActionCreators(deletePostOnServer, dispatch),
        onCreateNewCommentButtonClicked : bindActionCreators(onCreateNewCommentButtonClicked, dispatch),
    }
}

const mapStateToProps = ({comments, posts}) => {
    return {
        comments,
        posts
    }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps) (PostDetailView))
