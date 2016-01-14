/**
 * Application container
 * Loads configuration data and displays the final application
 * An external JSON file is used to provide set up data to the app outside of
 * the bundle file. Allows for configuration post build
 */

import React from 'react';
import AppStore from '../stores/AppStore.js';
import Actions from '../actions/actionCreators.js';
import ApplicationLoadingView from '../components/AppLoading.js';
import ApplicationLoadingErrorView from '../components/AppLoadingError.js';
import App from '../components/App.js';

import JSONLoader from '../service/JSONLoader.js';

export default class AppContainer extends React.Component {

  constructor(props) {
    super(props);
    // Loading the config data with no errors to start
    this.state = {loading: true, isError: false};
  }

  componentDidMount() {
    let {config} = this.props;

    if (!config) {
      // No config
      console.log('Starting with no config');
      AppStore.dispatch(Actions.setConfig(null));
      this.setState({loading: false});
    } else {
      // Start loading the data
      console.log('Starting with config ...');
      JSONLoader.onSuccess((data) => {
        console.log('Data loaded!',data);
        AppStore.dispatch(Actions.setConfig(data));
        console.log('setting state');
        this.setState({loading: false});
      });
      JSONLoader.onError((e) => {
        console.warn('Error loading config data',e);
        this.setState({loading: false, isError: true})
      });
      JSONLoader.load(config);
    }
  }

  // Render the application view depending on loading/error or data loaded
  render() {
    if (this.state.loading) {
      return <ApplicationLoadingView/>;
    } else if (this.state.isError) {
      return <ApplicationLoadingErrorView/>;
    }
    return <App />;
  }

}