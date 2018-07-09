import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapState = (state) => ({
  data: state.test.data
});

class test extends Component {
  render() {
  return (
    <div>
      <h1>Test</h1>
      <h2>The answer is: {this.props.data}</h2>
    </div>
  );
}
}

export default connect(mapState)(test);
