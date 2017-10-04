/**
 * Created by amit on 9/24/17.
 */

import React from 'react';
import {Card, CardText,CardActions} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ActionThumbDown from 'material-ui/svg-icons/action/thumb-down';
import {onEditCommentClicked, updateCommentOnServer,deleteCommentOnServer} from '../actions/CommentsAction';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import ActionUpdate from 'material-ui/svg-icons/action/update';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import TimeAgo from 'time-ago';


class CommentView extends React.Component {

    onEditClicked() {
        const {comment,onEditCommentClicked} = this.props;
        onEditCommentClicked(comment);
    }

    onDeleteComment() {
        const {comment, deleteCommentOnServer} = this.props;
        deleteCommentOnServer(comment.id);
    }

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
                    onClick={() => {
                        this.onEditClicked();
                    }}
                    mini>
                    <ActionUpdate />
                </FloatingActionButton>
                <FloatingActionButton
                    onClick={() => {
                        this.onDeleteComment();
                    }}
                    mini>
                    <ActionDelete />
                </FloatingActionButton>
            </CardActions>
        </Card>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onEditCommentClicked : bindActionCreators(onEditCommentClicked, dispatch),
        updateCommentOnServer : bindActionCreators(updateCommentOnServer, dispatch),
        deleteCommentOnServer: bindActionCreators(deleteCommentOnServer, dispatch)
    }
}



export default connect(null,mapDispatchToProps) (CommentView);
