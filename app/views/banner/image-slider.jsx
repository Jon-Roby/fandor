import React, { Component, PropTypes } from 'react';

import styles from '../../styles/image-slider.scss';

class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerFestivals: [],
      marginLeft: 0,
      transition: '1s',
      baseIndex: 0,
    };

    this.interval = setInterval(() => this.updatePhotos(), 5000);
  }

  updatePhotos() {
    this.setState({
      transition: '1s',
      marginLeft: -1900,
    });

    setTimeout(() => {
      this.setState({
        marginLeft: 0,
        transition: '0s',
        baseIndex: this.state.baseIndex + 1,
      });
    }, 1001);
  }

  render() {
    const { bannerFestivals } = this.props;
    const { baseIndex } = this.state;

    if (baseIndex > 7) clearInterval(this.interval);

    if (bannerFestivals !== undefined) {
      const sliderStyle = {
        marginLeft: this.state.marginLeft,
        transition: this.state.transition,
      };

      return (
        <div>
          <div className={ styles.tints }>
            <div className={ styles.tintLeft } />
            <div className={ styles.tintRight } />
          </div>

          <div className={ styles.sliderContainer } style={ sliderStyle }>
            {
              [0, 0, 1, 2, 3].map(imgPosition => {
                const imgRoot = 'http://d3uc4wuqnt61m1.cloudfront.net';
                const imgPath = bannerFestivals[baseIndex + imgPosition].banner_path;
                const imgSrc = `${imgRoot}${imgPath}`;
                return (
                  <div>
                    <img key={ baseIndex } src={ imgSrc } role='presentation' />
                  </div>
                );
              })
            }
          </div>
        </div>
      );
    }
    return (<div className={ styles.banner }>Image SLider</div>);
  }
}

ImageSlider.PropTypes = {

}

export default ImageSlider;
