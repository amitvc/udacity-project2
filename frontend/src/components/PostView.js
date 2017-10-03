/**
 * Created by amit on 9/30/17.
 */
import React from 'react';

import {Card,CardText, CardActions, CardHeader} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ActionThumbDown from 'material-ui/svg-icons/action/thumb-down';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {onEditPostClicked, updateUpVotePost, updateDownVotePost, deletePostOnServer} from '../actions/PostsAction';
import {getCommentsFromServer} from '../actions/CommentsAction';
import CommentView from './CommentView';
import TimeAgo from 'time-ago';


class PostView extends React.Component {

    onEditClicked = () => {
        const {post} = this.props;
        this.props.onEditPostClicked(post);
    }

    onDeleteClicked = () => {
        this.props.deletePostOnServer(this.props.post.id);
    }

    componentWillMount () {
        this.props.getCommentsFromServer(this.props.post.id);
    }


    render() {
        const {post} = this.props;
        const timeAgo = TimeAgo();
        const {comments} = this.props.comments;
        console.log("Post ID " + post.id + " comments " + comments);
        return (
        <Card>
            <CardHeader title={`Post : ${post.title}`}/>
            <CardText >
                <div>Body : {post.body}</div>
                <div>Author : {post.author}</div>
                <div>Created : {timeAgo.ago(post.timestamp)}</div>
                <div>Votes : {post.voteScore}</div>
            </CardText>
            <CardActions>
                <FlatButton label="Edit post" onClick={this.onEditClicked}/>
                <FlatButton label="Delete post" onClick={this.onDeleteClicked}/>
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
        onEditPostClicked : bindActionCreators(onEditPostClicked, dispatch),
        updateUpVotePost : bindActionCreators(updateUpVotePost, dispatch),
        updateDownVotePost : bindActionCreators(updateDownVotePost, dispatch),
        deletePostOnServer : bindActionCreators(deletePostOnServer, dispatch),
        getCommentsFromServer : bindActionCreators(getCommentsFromServer, dispatch)
    }
}

const mapStateToProps = (state) => {
    return {
        comments : state.comments
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (PostView);
