import React, { Component, PropTypes } from 'react';

import MarqueeFestivalListItem from './marquee-festival-list-item';

import styles from '../../styles/marquee-festivals.scss';

function MarqueeFestivals(props) {
  const { marqueeFestivals } = props;

  const marqueeFestivalsItems = marqueeFestivals.map(festivalItem =>
    <MarqueeFestivalListItem festivalItem={ festivalItem } />
  );

  return (
    <div className={ styles.marqueeFestivalsDisplay }>
      { marqueeFestivalsItems }
    </div>
  );
}

MarqueeFestivals.propTypes = {
  marqueeFestivals: PropTypes.array,
};

export default MarqueeFestivals;
