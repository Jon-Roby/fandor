import React, { PropTypes } from 'react';

function FestivalAlliance(props) {
  const { ffaAll, ffaUpcoming } = props;

  const ffaUpcomingItems = ffaUpcoming.map(festivalItem => (
    <li key={ festivalItem.id }>
      {festivalItem.name}
    </li>
  ));

  const ffaAllItems = ffaAll.map(festivalItem => (
    <li key={ festivalItem.id }>
      {festivalItem.name}
    </li>
  ));

  const ffaImage = 'http://d3uc4wuqnt61m1.cloudfront.net/assets/ffa_logo_small-0288774f02c8a6974a13328aded62e8a.png';

  return (
    <div>
      <div>
        <img src={ffaImage} />
        <div>Fandor Festival Alliance</div>
        <div>We connect film festivals to their audiences through social buzz, multimedia promotion, great movies, and exciting offers. Go ahead! Check out our partners.</div>
      </div>
      <ul>
        { ffaUpcomingItems }
      </ul>
      <ul>
        { ffaAllItems }
      </ul>
    </div>
  );
}

FestivalAlliance.propTypes = {
  ffaAll: PropTypes.array,
  ffaUpcoming: PropTypes.array,
};

export default FestivalAlliance;
