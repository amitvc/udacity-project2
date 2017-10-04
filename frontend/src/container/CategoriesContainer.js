/**
 * Created by amit on 9/25/17.
 */

import React from 'react';
import Category from '../components/CategoryView';
import {fetchPostsByCategory} from '../actions/CategoriesAction';
import {openCreateNewPostDialog, sortPostByVoteScore, sortPostByTimeStamp} from '../actions/PostsAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PostAddButton from '../components/PostAddButton';
import PostSortButton from '../components/PostSortButton';
import EditPostDialog from '../components/EditPostDialog';
import CreatePostDialog from '../components/CreatePostDialog';
import EditCommentDialog from '../components/EditCommentDialog';
import AddCommentDialog from '../components/AddCommentDialog';

import {SORT_BY_VOTES_SCORE, SORT_BY_TIMESTAMP} from '../actions/Constants';



/**
 * This container component bootstraps the Categories
 */
class CategoriesContainer extends React.Component {

    componentWillMount() {
        if(this.props.selectedCategory) {
            this.props.fetchPostsByCategory(this.props.selectedCategory);
        }
    }


    render() {
        const {posts, selectedCategory, openPostCreateDialogFlag, openPostEditDialogFlag,openCreateNewPostDialog,openCommentEditDialogFlag,openCommentAddDialogFlag} = this.props;

        return (
            <div>
                {
                    <div>
                        <Category category={selectedCategory} numberOfPosts={posts.length} posts={posts}/>
                        <EditPostDialog open={openPostEditDialogFlag}/>
                        <CreatePostDialog open={openPostCreateDialogFlag}/>
                        <EditCommentDialog open={openCommentEditDialogFlag}/>
                        <AddCommentDialog open={openCommentAddDialogFlag}/>
                        <PostAddButton
                            openCreatePostDialog={()=>{
                                openCreateNewPostDialog();
                            }}
                            style={{marginRight: 22,
                            position: 'fixed',
                            bottom: 25,
                            right: 25}}/>
                        <PostSortButton style={{marginRight: 22,
                            position: 'fixed',
                            bottom: 25,
                            right: 85}}
                            sort={SORT_BY_TIMESTAMP}/>
                        <PostSortButton style={{marginRight: 22,
                            position: 'fixed',
                            bottom: 25,
                            right: 145}}
                            sort={SORT_BY_VOTES_SCORE}/>
                    </div>

                }
            </div>
    );
    }
}

/**
 * Mapping the Categories from the state to this controls props.
 * Then these props are passed downed to individual CategoryView.
 * @param state
 * @returns {{categories: *}}
 */
const mapStateToProps =  (state) => {
    return {
        selectedCategory: state.categories.selectedCategory,
        posts : state.posts.posts,
        openPostEditDialogFlag: state.posts.openPostEditDialogFlag,
        openPostCreateDialogFlag: state.posts.openPostCreateDialogFlag,
        openCommentEditDialogFlag:state.comments.openCommentEditDialogFlag,
        openCommentAddDialogFlag: state.comments.openCommentAddDialogFlag,
        author: state.posts.author,
        body : state.posts.body,
        title : state.posts.title
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPostsByCategory : bindActionCreators(fetchPostsByCategory, dispatch),
        openCreateNewPostDialog : bindActionCreators(openCreateNewPostDialog, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer)