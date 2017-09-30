/**
 * Created by amit on 9/24/17.
 */

import React from 'react';
import PropTypes from 'prop-types';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';



/**
 * Class is responsible for showing a Category
 */
class CategoryView extends React.Component {

    static propTypes = {
        category : PropTypes.object
    }

    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        };
    }

    renderCategory () {
        return (

            <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
                <CardHeader
                    title={this.props.category.name}
                    subtitle={`Contains`}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardText>
                    Hello
                </CardText>
                <CardActions>
                    <FlatButton label="Expand" onClick={this.handleExpand} />
                    <FlatButton label="Reduce" onClick={this.handleReduce} />
                </CardActions>
            </Card>
        );
    }

    render() {
        let category = null;
        //if(this.props.category.visibility) {
            category = this.renderCategory()
       // }

        return (
            category
            )
    }
}

export default CategoryView;
