import ActionConstants from './actionConstants.js';

export default {
  setConfig(config) {
    return {
      type: ActionConstants.SET_CONFIG,
      payload: config
    }
  },

  setMedia(mediaObj) {
    return {
      type: ActionConstants.SET_MEDIA,
      payload: mediaObj
    }
  }

}