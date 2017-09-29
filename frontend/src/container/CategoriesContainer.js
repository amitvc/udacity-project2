/**
 * Created by amit on 9/25/17.
 */

import React from 'react';
import Category from '../components/CategoryView';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchCategories} from '../actions/index';

/**
 * This container component bootstraps the Categories
 */
export default class CategoriesContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
       // this.props.fetchCategories();
    }

    render() {
       // const {categories}  = this.props.categories;
      //  console.log("Cats "+categories);

        return (
            <div>

            </div>
    );
    }
}

/**
 * Mapping the Categories from the state to this controls props.
 * Then these props are passed downed to individual CategoryView.
 * @param state
 * @returns {{categories: *}}
 *
const mapStateToProps =  (state) => {
    return {
        categories: state.categories,
        posts : state.posts
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
            fetchCategories: bindActionCreators(fetchCategories, dispatch)
    }
}
 */

//export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer)