import { combineReducers } from 'redux';
import activeTab from './navigationReducer';
import { reducer as formReducer } from 'redux-form';
import session from './sessionReducer';

const rootReducer = combineReducers({
  activeTab,
  form: formReducer,
  session
});

export default rootReducer;
