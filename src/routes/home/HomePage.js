import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './HomePage.css';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import * as c from '../../appConstants';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar selectedOption={c.MENU_LABELS.RESERVATIONS} />
      </div>
    );
  }
}

export default withStyles(s)(HomePage);
