import React, { PropTypes } from 'react';

import styles from '../../styles/marquee-festival-list-item.scss';

function MarqueeFestivalListItem(props) {
  const { festivalItem } = props;
  const imgSrc = `http://d3uc4wuqnt61m1.cloudfront.net${festivalItem.banner_path}`;

  return (
    <div className={ styles.festivalItem } key={ festivalItem.id }>
      <div>
        <img className={ styles.festivalItemImage } src={ imgSrc } role='presentation' />
        <div className={ styles.festivalItemRibbon }>
          <div>{festivalItem.film_count} films</div>
        </div>
      </div>
      <div className={ styles.festivalItemName }>
        {festivalItem.name}
      </div>
      <div className={ styles.festivalItemDescription }>
        {festivalItem.description}
      </div>
    </div>
  );
}

MarqueeFestivalListItem.propTypes = {
  marqueeFestivals: PropTypes.array,
};

export default MarqueeFestivalListItem;
