/**
 * Created by amit on 9/24/17.
 */

import React from 'react';
import {Card, CardText,CardActions} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ActionThumbDown from 'material-ui/svg-icons/action/thumb-down';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import ActionUpdate from 'material-ui/svg-icons/action/update';
import {connect} from 'react-redux';
import TimeAgo from 'time-ago';


class CommentView extends React.Component {

    render(){
        let timeAgo = TimeAgo();
        const {comment} = this.props;
        return (
        <Card>
            <CardText>
                <div><b>{comment.author}</b> posted {timeAgo.ago(comment.timestamp)} ago</div>
                <div>{comment.body}</div>
            </CardText>
            <CardActions>
                <FloatingActionButton
                    mini>
                    <ActionUpdate />
                </FloatingActionButton>
                <FloatingActionButton
                    mini>
                    <ActionDelete />
                </FloatingActionButton>
                <FloatingActionButton
                    mini>
                    <ActionThumbUp />
                </FloatingActionButton>
                <FloatingActionButton
                    mini>
                    <ActionThumbDown />
                </FloatingActionButton>
            </CardActions>


        </Card>
        );
    }
}

export default connect(null,null) (CommentView);
