/**
 * Created by amit on 9/25/17.
 */

import {combineReducers} from 'redux';
import categories from './Categories';
import posts from './Post';
import selectedCategory from './SelectedCategories';

export default combineReducers({
    categories,
    posts,
    selectedCategory
});
