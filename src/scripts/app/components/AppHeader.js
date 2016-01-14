import React from 'react';

require('!style!css!sass!../../../sass/layout/_header.sass');

// Header bar
export default class AppHeader extends React.Component {
  render() {
    return (
      <header className='app__header'>
        <h1>{this.props.title}</h1>
      </header>
    );
  }
}