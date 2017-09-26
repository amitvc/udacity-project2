/**
 * Created by amit on 9/24/17.
 */

import React from 'react';
import {List, ListItem} from 'material-ui/List';


/**
 * Container component which displays the categories as navigation list
 */
export default class CategoriesNavBar extends React.Component {



    constructor(props) {
        super(props);
    }

    onCategoryChange() {

    }

    render(){
        return (
        <nav>
            <List className="nav-side-bar">
                {this.props.categories.map((cat) => {
                    return (
                        <ListItem primaryText={cat} onClick={this.onCategoryChange}/>
                    );
                })}
            </List>
        </nav>


        )
    }
}