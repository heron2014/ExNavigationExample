import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../redux';
import devTools from 'remote-redux-devtools';
import { createNavigationEnabledStore, NavigationReducer } from '@exponent/ex-navigation';
import createLogger from 'redux-logger';

const createStoreWithNavigation = createNavigationEnabledStore({
  createStore,
  navigationStateKey: 'navigation',
});

//uncomment if you want to use loggerMiddleware from redux-logger
// const middleWare = [];
// // Logger Middleware. This always has to be last
// const loggerMiddleware = createLogger({
//   predicate: (getState, action) => process.env.NODE_ENV === 'development'
// });
//
// middleWare.push(loggerMiddleware);

// if above logger is used, comment out devTools and uncomment applyMiddleware...
function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(thunk),
    // applyMiddleware(thunk, ...middleWare),
    devTools()
  );
  return createStoreWithNavigation(reducer, initialState, enhancer);
}

const store = configureStore();

export default store;
