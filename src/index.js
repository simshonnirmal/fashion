import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/reducer';
import rootSaga from './sagas/saga';

import RouterComponent from './routers/router';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
ReactDOM.render( <Provider store={store}><RouterComponent/></Provider>, document.getElementById('root') );
