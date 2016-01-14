import ActionConstants from '../actions/actionConstants.js';
import DefaultState from './defaultState.js';

function getMediaObjectById(state, id) {
  return state.config.media.filter((o) => o.id === id)[0];
}

// Note, Object.assign must be polyfiled in IE 11
export default (state, action) => {
  if (typeof state === 'undefined') {
    return DefaultState;
  }
  switch (action.type) {
    case ActionConstants.SET_CONFIG:
      return Object.assign({}, state, {config: action.payload});
    case ActionConstants.SET_MEDIA:
      return Object.assign({}, state, {currentMedia: getMediaObjectById(state, action.payload)});
    default:
      return state;
  }
};