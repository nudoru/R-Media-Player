import React from 'react';

require('!style!css!sass!../../../sass/components/loadingmessage.sass');
require('!style!css!../../../sass/components/loadingspinner.css');

export default class AppLoading extends React.Component {
  render() {
    return (
      <div id="initialization__cover">
        <div className="initialization__message">
          <h1>Reticulating Splines</h1>
          <div className="loadingspinner">
            <div className="cssload-spin-box"></div>
          </div>
        </div>
      </div>
    );
  }
}