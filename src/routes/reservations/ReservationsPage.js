import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ReservationsPage.css';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import * as c from '../../appConstants';

class ReservationsPage extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar selectedOption={c.MENU_LABELS.RESERVATIONS} />
      </div>
    );
  }
}

export default withStyles(s)(ReservationsPage);
