import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import Header from './static/pageHeader';
import CategoriesNavBar from './components/CategoriesNavBar';
import CategoriesContainer from './container/CategoriesContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import thunkMiddleware from 'redux-thunk'
import registerServiceWorker from './registerServiceWorker';
import { routerMiddleware,ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const history = createHistory()


const middleware = [
    thunkMiddleware,
    routerMiddleware(history)
]



const store = createStore(
    reducer,
    composeEnhancers (
        applyMiddleware(
            ...middleware
        )
    )
)

const MainApp = () => {
    return (
            <div>
                <Header/>
                    <div className="flex-container">
                        <CategoriesNavBar  className="side-nav"/>
                        <div className="content">
                            <CategoriesContainer />
                        </div>
                    </div>
            </div>
    )
}


const App = () => (
    <MuiThemeProvider>
        <Provider store={store}>
            <ConnectedRouter history={history}>

                <MainApp/>
            </ConnectedRouter>
        </Provider>
    </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
