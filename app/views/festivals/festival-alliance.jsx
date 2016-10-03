import React, { PropTypes } from 'react';

import styles from '../../styles/festival-alliance.scss';

function FestivalAlliance(props) {
  const { ffaAll, ffaUpcoming } = props;

  const ffaUpcomingItems = ffaUpcoming.map(festivalItem => (
    <li className={ styles.listItem } key={ festivalItem.id }>
      {festivalItem.name}
    </li>
  ));

  const ffaAllItems = ffaAll.map(festivalItem => (
    <li className={ styles.listItem } key={ festivalItem.id }>
      {festivalItem.name}
    </li>
  ));

  const ffaImage = 'http://d3uc4wuqnt61m1.cloudfront.net/assets/ffa_logo_small-0288774f02c8a6974a13328aded62e8a.png';

  return (
    <div className={ styles.ffaContainer }>
      <div className={ styles.ffaSecondContainer }>
        <div>
          <img className={ styles.ffaImage } src={ ffaImage } role='presentation' />
          <div className={ styles.ffaTitle }>Fandor Festival Alliance</div>
          <div className={ styles.ffaBlurb }>We connect film festivals to their audiences through social buzz, multimedia promotion, great movies, and exciting offers. Go ahead! Check out our partners.</div>
        </div>
        <ul>
          <div className={ styles.listTitle }>Upcoming Festivals</div>
          { ffaUpcomingItems }
        </ul>
        <ul>
          <div className={ styles.listTitle }>All F|FA Festivals</div>
          { ffaAllItems }
        </ul>
      </div>
    </div>
  );
}

FestivalAlliance.propTypes = {
  ffaAll: PropTypes.array,
  ffaUpcoming: PropTypes.array,
};

export default FestivalAlliance;
