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
import { BrowserRouter } from 'react-router-dom'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose



const store = createStore(
    reducer,
    composeEnhancers (
        applyMiddleware(
            thunkMiddleware
        )
    )
)


const MainApp = () => {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                    <div className="flex-container">
                        <CategoriesNavBar  className="side-nav"/>
                        <div className="content">
                            <CategoriesContainer />
                        </div>
                    </div>
            </div>
        </BrowserRouter>
    )
}


const App = () => (
    <MuiThemeProvider>
        <Provider store={store}>
            <MainApp/>
        </Provider>
    </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
