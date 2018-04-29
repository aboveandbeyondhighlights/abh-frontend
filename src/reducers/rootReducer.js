import { combineReducers } from 'redux';
import activeTab from './navigationReducer';

const rootReducer = combineReducers({
  activeTab,
});

export default rootReducer;
