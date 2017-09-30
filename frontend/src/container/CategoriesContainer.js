/**
 * Created by amit on 9/25/17.
 */

import React from 'react';
import Category from '../components/CategoryView';
import {fetchPostsByCategory} from '../actions/CategoriesAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

/**
 * This container component bootstraps the Categories
 */
class CategoriesContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchPostsByCategory(this.props.selectedCategory);
    }

    render() {
        const {posts, selectedCategory} = this.props;
        const category = {name:posts.name};
        return (
            <div>
                <Category category={category}/>
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
    console.log("State " + state);
    return {
        selectedCategory: state.selectedCategory,
        posts : state.posts
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPostsByCategory : bindActionCreators(fetchPostsByCategory, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer)