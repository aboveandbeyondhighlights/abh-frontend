import { ACTIVE_NAVIGATION_TAB } from './actionTypes';

export function setActiveTab(tab) {
  return {
    type: ACTIVE_NAVIGATION_TAB,
    tab
  };
}
