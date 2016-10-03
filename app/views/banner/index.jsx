import React, { PropTypes } from 'react';

function Banner(props) {
  const { bannerFestivals = [] } = props;
  console.log('bannerFestivals ', bannerFestivals);
  return (
    <div>
      Banner 2
    </div>
  );
}

export default Banner;
