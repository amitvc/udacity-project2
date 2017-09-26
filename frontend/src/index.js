import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import Header from './static/pageHeader';
import CategoriesNavBar from './components/CategoriesNavBar';
import Category from './components/CategoryView';
import CategoriesContainer from './container/CategoriesContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';


import registerServiceWorker from './registerServiceWorker';
const categories = ['React', 'Angular'];

const store = createStore(
    reducer
)


console.log(store.getState());


const App = () => (
    <MuiThemeProvider>
        <Provider store={store}>
            <div>
                <Header/>
                <div className="flex-container">
                    <CategoriesNavBar  className="side-nav" categories={categories}/>
                    <div className="content">
                        <CategoriesContainer />
                    </div>
                </div>
            </div>
        </Provider>
    </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
