/**
 * Created by amit on 9/30/17.
 */

import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentSort from 'material-ui/svg-icons/content/sort';
import {connect} from 'react-redux';
import {sortPostByTimeStamp, sortPostByVoteScore} from '../actions/PostsAction';
import {SORT_BY_VOTES_SCORE, SORT_BY_TIMESTAMP} from '../actions/Constants';

class PostSortButton extends React.Component {

    render() {
        const {sort,sortPostByTimeStamp,sortPostByVoteScore } = this.props;
        return (
            <FloatingActionButton
                style={this.props.style} onClick={() => {
                    if(sort === SORT_BY_TIMESTAMP) {
                        sortPostByTimeStamp();
                    }
                    if(sort === SORT_BY_VOTES_SCORE) {
                        sortPostByVoteScore();
                    }
            }}>
                <ContentSort />
            </FloatingActionButton>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sortPostByTimeStamp: () => dispatch(sortPostByTimeStamp()),
        sortPostByVoteScore: () => dispatch(sortPostByVoteScore())
    }
}


export default connect(null, mapDispatchToProps) (PostSortButton);