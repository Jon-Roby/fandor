import React, { Component, PropTypes } from 'react';

function MarqueeFestivals(props) {
  const { marqueeFestivals } = props;

  const marqueeFestivalsItems = marqueeFestivals.map(festivalItem => {
    const imgSrc = `http://d3uc4wuqnt61m1.cloudfront.net${festivalItem.banner_path}`;
    return (
      <li key={ festivalItem.id }>
        <div>
          {festivalItem.film_count}
        </div>
        <div>
          <img src={ imgSrc } role="presentation" />
        </div>
        <div>
          {festivalItem.name}
        </div>
        <div>
          {festivalItem.description}
        </div>
      </li>
    );
  });

  return (
    <div>
      <ul>
        { marqueeFestivalsItems }
      </ul>
    </div>
  );
}

MarqueeFestivals.propTypes = {
  marqueeFestivals: PropTypes.array,
};

export default MarqueeFestivals;
