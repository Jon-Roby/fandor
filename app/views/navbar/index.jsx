import React from 'react';
import styles from '../../styles/navbar.scss';

function Navbar() {
  const imgUrl = 'http://d3uc4wuqnt61m1.cloudfront.net/assets/fandor_logo@2x-c079219b36c9d4048ece9e7c9f0ef427.png';

  return (
    <div className={ styles.navbarContainer }>
      <nav className={ styles.navbar }>
        <div className={ styles.navbarLeft }>
          <div>
            <img className={ styles.navbarLogo } src={ imgUrl } role='presentation' />
          </div>
          <div>
            <div>Films</div>
            <div className={ styles.navbarDownArrow }>&#9660;</div>
          </div>
          <div>
            <div>Featured</div>
            <div className={ styles.navbarDownArrow }>&#9660;</div>
          </div>
          <div>
            <div>Community</div>
            <div className={ styles.navbarDownArrow }>&#9660;</div>
          </div>
        </div>

        <div className={ styles.navbarRight }>
          <div className={ styles.navbarLoginButton }>Log in</div>
          <div className={ styles.navbarSignInButton }><div>Subscribe Now</div></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
