import React, { Component } from 'react';
import SiteHeader from './site-header';
import Footer from './footer';

export default class App extends Component {
  render() {
    return (
      <div className="asamad">
        <SiteHeader />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
