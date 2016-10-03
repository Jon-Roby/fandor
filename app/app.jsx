import React from 'react';
import ReactDOM from 'react-dom';

import Fandor from './views/fandor.jsx';

import normalize from './styles/normalize.scss';
import styles from './styles/app.scss';

ReactDOM.render(
  <Fandor style={ styles } style={ normalize } />,
  document.getElementById('app')
);
