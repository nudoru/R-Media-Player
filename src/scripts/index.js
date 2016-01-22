/**
 * Media Player application
 * Matt Perkins, hello@mattperkins.me
 */

import React from 'react';
import ReactDOM from 'react-dom';
import AppStore from './app/stores/AppStore';
import Actions from './app/actions/actionCreators.js';
import ApplicationContainer from './app/containers/AppContainer.js';

// For IE11
require('es6-promise').polyfill();

// For IE11
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
if (typeof Object.assign !== 'function') {
  (function () {
    Object.assign = function (target) {
      'use strict';
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var output = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index];
        if (source !== undefined && source !== null) {
          for (var nextKey in source) {
            if (source.hasOwnProperty(nextKey)) {
              output[nextKey] = source[nextKey];
            }
          }
        }
      }
      return output;
    };
  })();
}

/**
 * SharePoint doesn't allow uploading .json files so we use a .txt file.
 * Note, made change to nori/rest module to change accept header to text/* to
 * accommodate
 */
ReactDOM.render(<ApplicationContainer config="config.txt"/>, document.querySelector('#application'));