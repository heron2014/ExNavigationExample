import { combineReducers } from 'redux';
import { NavigationReducer } from '@exponent/ex-navigation';

const rootReducer = combineReducers({
  navigation: NavigationReducer
});

export default rootReducer;
