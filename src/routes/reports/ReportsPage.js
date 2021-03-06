import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ReportsPage.css';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import * as c from '../../appConstants';

class ReportsPage extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar selectedOption={c.MENU_LABELS.REPORTS} />
        Not Yet Implemented
      </div>
    );
  }
}

export default withStyles(s)(ReportsPage);
