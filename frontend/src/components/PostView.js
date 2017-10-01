/**
 * Created by amit on 9/30/17.
 */
import React from 'react';

import {Card,CardText, CardActions, CardHeader} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TimeAgo from 'time-ago';


class PostView extends React.Component {

    render() {

        const {post} = this.props;
        const timeAgo = TimeAgo();
        return (
        <Card>
            <CardHeader title={`Post : ${post.title}`}/>
            <CardText >
                <div>Body : {post.body}</div>
                <div>Author : {post.author}</div>
                <div>Created : {timeAgo.ago(post.timestamp)}</div>
            </CardText>
            <CardActions>
                <FlatButton label="Edit post"/>
                <FlatButton label="Delete post"/>
            </CardActions>
        </Card>
        );
    }
}

export default PostView;
