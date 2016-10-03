import React, { Component, PropTypes } from 'react';

import styles from '../../styles/banner.scss';

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerFestivals: [],
      left: 0,
      middle: 1,
      right: 2,
      next: 3,
    };
    this.interval = setInterval(() => this.tick(), 3000);
  }

  tick() {
    this.setState({
      counter: this.state.counter + this.props.increment,
      left: this.state.left + 1,
      middle: this.state.middle + 1,
      right: this.state.right + 1,
      next: this.state.next + 1,
    });

  }

  componentWillMount() {
    this.setState({ bannerFestivals: this.props.bannerFestivals });
  }

  render() {
    if (this.props.bannerFestivals !== undefined) {
      const imgSrc1 = `http://d3uc4wuqnt61m1.cloudfront.net${this.props.bannerFestivals[this.state.left].banner_path}`;
      const imgSrc2 = `http://d3uc4wuqnt61m1.cloudfront.net${this.props.bannerFestivals[this.state.middle].banner_path}`;
      const imgSrc3 = `http://d3uc4wuqnt61m1.cloudfront.net${this.props.bannerFestivals[this.state.right].banner_path}`;
      const imgSrc4 = `http://d3uc4wuqnt61m1.cloudfront.net${this.props.bannerFestivals[this.state.next].banner_path}`;

      return (
        <div className={ styles.bannerContainer }>
          <div className={ styles.bannerTop }>Banner Top</div>
          <div className={ styles.banner }>
            <img id={ styles.slide } className={ styles.bannerImgLeft } src={ imgSrc1 } role='presentation' />
            <img id={ styles.slide } className={ styles.bannerImgMiddle } src={ imgSrc2 } role='presentation' />
            <img id={ styles.slide } className={ styles.bannerImgRight } src={ imgSrc3 } role='presentation' />
            <img id={ styles.slide } className={ styles.bannerImgNext } src={ imgSrc4 } role='presentation' />
          </div>
        </div>
      );
    }
    return (<div className={ styles.banner }>banner</div>);
  }
}

export default Banner;
