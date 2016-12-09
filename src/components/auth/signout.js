import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signout extends Component {
  componentWillMount() {
    //sign the user out
    this.props.signoutUser();
  }

  render() {
    return <div>You have been signed out safely</div>;
  }

}
export default connect(null, actions)(Signout);
