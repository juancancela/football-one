import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ClientsPage.css';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import * as c from '../../appConstants';

class ClientsPage extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar selectedOption={c.MENU_LABELS.CLIENTS} />
      </div>
    );
  }
}

export default withStyles(s)(ClientsPage);
