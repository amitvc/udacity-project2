/**
 * Created by amit on 9/24/17.
 */

import React from 'react';
import {List, ListItem} from 'material-ui/List';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchCategories, fetchPostsByCategory,displayDefaultCategory} from '../actions/CategoriesAction';


/**
 * Container component which displays the categories as navigation list
 */
class CategoriesNavBar extends React.Component {

    constructor(props) {
        super(props);
    }

    onCategoryChange = (event) => {
        console.log("On change clicked " + event.target.innerText);
    }

    componentWillMount() {
        this.props.fetchCategories().then(() => {
            console.log("Now calling displayDefaultCategory");
            this.props.displayDefaultCategory()
        })
    }

    render(){
        const {categories}  = this.props.categories;
        if(categories == undefined || categories.length  == 0) {
            return (<nav></nav>)
        }
        return (
        <nav>
            <List className="nav-side-bar">
                {categories.map((cat) => {
                    return (
                        <ListItem key={cat.name} primaryText={cat.name} onClick={this.onCategoryChange}/>
                    );
                })}
            </List>
        </nav>


        )
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
    };
}

const mapDispatchToProps = (dispatch, state) => {
    return {
        fetchCategories: bindActionCreators(fetchCategories, dispatch),
        fetchPostsByCategory: bindActionCreators(fetchPostsByCategory, dispatch),
        displayDefaultCategory: bindActionCreators(displayDefaultCategory, dispatch, state)

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesNavBar)