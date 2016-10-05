import React, { PropTypes } from 'react';

import ImageSlider from './image-slider';

import styles from '../../styles/banner.scss';

function Banner(props) {
  return (
    <div className={ styles.banner }>
      <div className={ styles.bannerTop }>
        <div className={ styles.bannerTopTextContainer }>
          <div className={ styles.bannerTopTitle }>Film Festivals</div>
          <div className={ styles.bannerTopBlurb }>
            If you're looking for the best films from the world's finest film
            festivals, you&#39;ve come to the right place.
          </div>
        </div>
      </div>
      <ImageSlider bannerFestivals={props.bannerFestivals} />
    </div>
  )
}

Banner.PropTypes = {

}

export default Banner;
