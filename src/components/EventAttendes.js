import React, { Component } from 'react';
import { List, Image } from 'semantic-ui-react';

class EventAttendes extends Component {
  render() {
    return (
      <List.Item>
        <Image as='a' size='mini' circular src="assets/pat.jpg"  />
      </List.Item>
    );
  }
}

export default EventAttendes;
