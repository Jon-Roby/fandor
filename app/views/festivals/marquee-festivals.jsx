import React, { Component, PropTypes } from 'react';

import MarqueeFestivalListItem from './marquee-festival-list-item';

import styles from '../../styles/marquee-festivals.scss';

function MarqueeFestivals(props) {
  const { marqueeFestivals } = props;

  const marqueeFestivalsItems = marqueeFestivals.map(festivalItem =>
    <MarqueeFestivalListItem festivalItem={ festivalItem } />
  );

  return (
    <div className={ styles.marqueeFestivalContainer }>
      <div className={styles.marqueeFestivalTitle}>Marquee Festivals</div>
      <div className={ styles.marqueeFestivalsDisplay }>
        { marqueeFestivalsItems }
      </div>
    </div>
  );
}

MarqueeFestivals.propTypes = {
  marqueeFestivals: PropTypes.array,
};

export default MarqueeFestivals;
