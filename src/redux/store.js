import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../components/redux/rootReducer'
import createSagaMiddleware from "redux-saga";
import reducers from './reducers';
import sagas from "./sagas";
import logger from 'redux-logger';
import thunk from 'redux-thunk'
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export function configureStore(initialState) {

    const store = createStore(
        reducers,
        initialState,
        compose(applyMiddleware(...middlewares,logger, thunk))
    );

    sagaMiddleware.run(sagas);

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
