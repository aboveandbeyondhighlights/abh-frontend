import initialState from './initialState';
import { ACTIVE_NAVIGATION_TAB } from '../actions/actionTypes';

function activeTab(state = initialState, action) {
  switch(action.type) {
    case ACTIVE_NAVIGATION_TAB:
      return {
        current: action.tab
      };
    default:
      return state;
  }
}

export default activeTab;
