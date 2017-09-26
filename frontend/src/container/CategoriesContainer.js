/**
 * Created by amit on 9/25/17.
 */

import React from 'react';
import Category from '../components/CategoryView';
import {connect} from 'react-redux';


/**
 * This container component bootstraps the Categories
 */
class CategoriesContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {categories}  = this.props;
        return (
            <div>
                {
                    categories.map((category) => {
                        return (<Category category={category}/>);
                    })}
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
        categories: state.categories,
        posts : state.posts
    };
}

export default connect(mapStateToProps)(CategoriesContainer);