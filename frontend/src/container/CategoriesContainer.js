/**
 * Created by amit on 9/25/17.
 */

import React from 'react';
import Category from '../components/CategoryView';
import {fetchPostsByCategory} from '../actions/CategoriesAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PostAddButton from '../components/PostAddButton';
import PostSortButton from '../components/PostSortButton';


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
        const {posts, selectedCategory} = this.props;
        if(posts === undefined || posts.length === 0) {
            return (<div><PostAddButton style={{marginRight: 22,
                position: 'fixed',
                bottom: 25,
                right: 25}}/>
                <PostSortButton style={{marginRight: 22,
                    position: 'fixed',
                    bottom: 25,
                    right: 85}}/>
                <PostSortButton style={{marginRight: 22,
                    position: 'fixed',
                    bottom: 25,
                    right: 145}}/></div>);
        }
        return (
            <div>
                {
                    <div>
                        <Category category={selectedCategory} numberOfPosts={posts.length} posts={posts}/>
                        <PostAddButton style={{marginRight: 22,
                            position: 'fixed',
                            bottom: 25,
                            right: 25}}/>
                        <PostSortButton style={{marginRight: 22,
                            position: 'fixed',
                            bottom: 25,
                            right: 85}}/>
                        <PostSortButton style={{marginRight: 22,
                            position: 'fixed',
                            bottom: 25,
                            right: 145}}/>
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
        posts : state.posts.posts
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPostsByCategory : bindActionCreators(fetchPostsByCategory, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer)