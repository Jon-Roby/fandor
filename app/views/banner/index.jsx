import React, { PropTypes } from 'react';

import styles from '../../styles/banner.scss';

function Banner(props) {
  const { bannerFestivals = [] } = props;
  console.log('bannerFestivals ', bannerFestivals);
  return (
    <div className={ styles.banner }>
      Banner
    </div>
  );
}

export default Banner;
