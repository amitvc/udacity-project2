/**
 * Created by amit on 9/30/17.
 */


import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';



class PostAddButton extends React.Component {

    render() {
        return (
            <FloatingActionButton
                style={this.props.style}>
                <ContentAdd />
            </FloatingActionButton>
        );
    }
}

export default PostAddButton;