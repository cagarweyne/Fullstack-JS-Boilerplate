import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

export default class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tutorials: true,
      courses: false
    }

    this.handleTitleClick = this.handleTitleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {

  }

  handleTitleClick(type) {
    if(type === 'courses') {
      this.setState({
        tutorials: false,
        courses: true
      });
    } else {
      this.setState({
        tutorials: true,
        courses: false
      });
    }
  }

  render() {
    return (
      <div>
        Hello World!
      </div>
    );
  }
}
