import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import Header from './static/pageHeader';
import CategoriesNavBar from './components/CategoriesNavBar';
import Category from './components/CategoryView';
import CategoriesContainer from './container/CategoriesContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import registerServiceWorker from './registerServiceWorker';



const loggerMiddleware = createLogger();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose



const store = createStore(
    reducer,
    composeEnhancers (
        applyMiddleware(
            thunkMiddleware
        )
    )
)


console.log(store.getState());


const App = () => (
    <MuiThemeProvider>
        <Provider store={store}>
            <div>
                <Header/>
                <div className="flex-container">
                    <CategoriesNavBar  className="side-nav"/>
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
