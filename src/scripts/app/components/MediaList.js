import React from 'react';
import MediaListItem from './MediaListItem'

require('!style!css!sass!../../../sass/components/MediaList.sass');

export default class MediaList extends React.Component {
  render() {
    return (
      <div className="mediaList__container">
        {this.props.media.map((c, i) => <MediaListItem key={i} id={c.id}
                                                       title={c.title}
                                                       date={c.date}
                                                       description={c.description}
                                                       type={c.type}
                                                       duration={c.duration}/>)}
      </div>
    );
  }
}