import React, { Component } from 'react';

import Navbar from './navbar';
import Banner from './banner';
import Festivals from './festivals';

class Fandor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      festivalData: {}
    };
  }

  componentDidMount() {
    fetch('../../festivals.json').then(res => res.json().then(festivalData => {
      this.setState({ festivalData });
    }));
  }

  render() {
    console.log('this state ', this.state);
    return (
      <div>
        <Navbar />
        <Banner bannerFestivals={ this.state.festivalData.festivals } />
        <Festivals festivalData={ this.state.festivalData } />
      </div>
    )
  }
}

export default Fandor;
