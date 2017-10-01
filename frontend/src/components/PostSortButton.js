/**
 * Created by amit on 9/30/17.
 */

import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentSort from 'material-ui/svg-icons/content/sort';



class PostSortButton extends React.Component {

    render() {
        return (
            <FloatingActionButton
                style={this.props.style}>
                <ContentSort />
            </FloatingActionButton>
        );
    }
}

export default PostSortButton;