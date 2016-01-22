/*
 Container componet for the application
 Refer to React-redux to bind app to store
 https://github.com/rackt/react-redux/blob/master/docs/quick-start.md#quick-start
 */

import React from 'react';
//TODO implement import { connect } from 'react-redux';

import AppStore from '../stores/AppStore';
import Actions from '../actions/actionCreators';
import Header from './AppHeader';
import MediaList from './MediaList'
import MediaPlayerFrame from './MediaPlayerFrame'

require('!style!css!sass!../../../sass/pages/_application.sass');

export default class App extends React.Component {

  componentDidMount() {
    let appState  = AppStore.getState(),
        firstItem = appState.config.media[0];


    if(firstItem) {
      AppStore.dispatch(Actions.setMedia(firstItem.id));
    }
  }

  render() {
    let appState = AppStore.getState();

    return (
      <div>
        <Header title={appState.config.title}/>
        <div className="app__content">
          <MediaPlayerFrame />
          <MediaList media={appState.config.media}/>
        </div>
      </div>
    );
  }
}