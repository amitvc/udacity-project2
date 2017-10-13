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
import CommentView from './CommentView';
import TimeAgo from 'time-ago';


class PostDetailView extends React.Component {

    constructor(props) {
        super(props);
    }

    componentShouldUpdate() {
        console.log("should");
    }

    postCommentButtonClicked = () => {
        this.props.onCreateNewCommentButtonClicked(this.props.post.id);
    }

    componentWillMount () {
        this.props.getCommentsFromServer(this.props.post.id);
    }




    render() {

        console.log(this.props.match);

        const {post} = this.props;
        const timeAgo = TimeAgo();
        const {comments} = this.props.comments;
        return (
            <Card>
                <CardHeader title={`${post.title}`}/>
                <CardText >
                    <div>{post.body}</div>
                </CardText>
                <CardActions>
                    <FlatButton label="Post Comment" onClick={this.postCommentButtonClicked}/>
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
        onCreateNewCommentButtonClicked : bindActionCreators(onCreateNewCommentButtonClicked, dispatch)
    }
}

const mapStateToProps = ({comments, posts}) => {
    return {
        comments,
        posts
    }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps) (PostDetailView))
