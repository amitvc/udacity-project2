/**
 * Created by amit on 9/24/17.
 */

import React from 'react';
import PropTypes from 'prop-types';

import {Card, CardHeader} from 'material-ui/Card';

import  PostView from './PostView';
//import CommentView from './CommentView';



/**
 * Class is responsible for showing a Category
 */
class CategoryView extends React.Component {

    static propTypes = {
        numberOfPosts : PropTypes.number
    }

    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        };
    }

    renderCategory () {
        const {posts} = this.props;
        return (
            <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
                <CardHeader
                    title={this.props.category}
                    subtitle={`Contains  ${this.props.numberOfPosts}   posts`}
                    subtitleColor="red"
                />
                {
                    posts.map((post) => {
                        return (
                            <PostView post={post} key={post.id}>
                            </PostView>
                        );
                    })

                }
            </Card>
        );
    }

    render() {
        return (this.renderCategory());
    }
}

export default CategoryView;
