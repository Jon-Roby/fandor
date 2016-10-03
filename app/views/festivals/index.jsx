import React, { PropTypes } from 'react';
import MarqueeFestivals from './marquee-festivals';
import FestivalAlliance from './festival-alliance';

import styles from '../../styles/festivals.scss';

function Festivals(props) {
  const {
    festivalData: {
      festivals: [...festivals] = [],
      festival_collections: {
        marquee: [...marquee] = [],
        ffa_all: [...ffa_all] = [],
        ffa_upcoming: [...ffa_upcoming] = [],
      } = {},
    },
  } = props;

  // See note below for micro-optimization.
  const marqueeFestivals = festivals.filter(festival => marquee.includes(festival.id));
  const ffaAll = festivals.filter(festival => ffa_all.includes(festival.id));
  const ffaUpcoming = festivals.filter(festival => ffa_upcoming.includes(festival.id));

  return (
    <div className={ styles.festivals }>
      <MarqueeFestivals

        marqueeFestivals={ marqueeFestivals }
      />
      <FestivalAlliance
        ffaAll={ ffaAll }
        ffaUpcoming={ ffaUpcoming }
      />
    </div>
  );
}

Festivals.propTypes = {
  festivalData: PropTypes.object,
  marquee: PropTypes.array,
  ffa_all: PropTypes.array,
  ffa_upcoming: PropTypes.array,
};

export default Festivals;

/*
marquee ids could be placed into an object:

let marqueeIds = marquee.reduce((obj, festivalId) => {
  obj[festivalId] = {};
  return obj;
}, {});

Then iterate through the festivals array and if the id is included in marqueeIds,
(which is a constant lookup time O(1)), add it as the value to corresponding id.

This function is O(2n) rather than O(n^2), which is the current time complexity
for obtaining marqueeFestivals. However since there are so few items, I won't be
concerned with micro-optimizations like this.
*/
