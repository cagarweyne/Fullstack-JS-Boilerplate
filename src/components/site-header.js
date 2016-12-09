import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Headroom from 'react-headroom';
import * as actions from '../actions';

class SiteHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: false
    }
  }

  handleBurgerMenuClick = ()=> {
    this.setState({mobile: !this.state.mobile});
  };

  handleMenuClick = ()=> {
    this.setState({mobile: false});
  };

  render() {
    return (
      <div className="">
        Header Component
      </div>
    );
  }
}

export default connect(null, actions)(SiteHeader);
