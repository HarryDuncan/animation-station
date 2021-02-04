import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { initializeIcons } from '@uifabric/icons';
import logger from 'redux-logger';
import reducer from './store/reducer';
import Main from './main'
import{ BrowserRouter} from 'react-router-dom'

initializeIcons();


let middleware : any = null
if(process.env.NODE_ENV !== 'production'){
	middleware = applyMiddleware(thunk, logger);
}else{
	middleware = applyMiddleware(thunk);
}


const store = createStore(reducer,middleware);

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);




ReactDom.render(<BrowserRouter><Provider store={store}> <Main /></Provider></BrowserRouter>, mainElement);
