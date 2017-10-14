/**
 * Created by amit on 9/30/17.
 */
import React from 'react';

import {Card,CardText, CardActions, CardHeader} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {postDetailsViewClicked} from '../actions/PostsAction';
import {getCommentsFromServer} from '../actions/CommentsAction';
import {withRouter} from 'react-router-dom';

import TimeAgo from 'time-ago';


class PostView extends React.Component {



    componentWillMount () {
        this.props.getCommentsFromServer(this.props.post.id);
    }


    render() {
        const {post} = this.props;
        const timeAgo = TimeAgo();
        const {comments} = this.props.comments;
        return (
        <Card>
            <CardHeader title={`Post : ${post.title}`}/>
            <CardText >
                <div>Body : {post.body}</div>
                <div>Author : {post.author}</div>
                <div>Created : {timeAgo.ago(post.timestamp)}</div>
                <div>Votes : {post.voteScore}</div>
                <div>{comments.length} Comments</div>
            </CardText>
            <CardActions>
                <Link to={`/${post.category}/${post.id}`}>
                    <FlatButton label="Details"/>
                </Link>
            </CardActions>
        </Card>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        getCommentsFromServer : bindActionCreators(getCommentsFromServer, dispatch),
        postDetailsViewClicked : bindActionCreators(postDetailsViewClicked, dispatch)
    }
}

const mapStateToProps = ({comments}) => {
    return {
        comments
    }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps) (PostView));
