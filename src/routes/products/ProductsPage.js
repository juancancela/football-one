import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ProductsPage.css';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import * as c from '../../appConstants';

class ProductsPage extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar selectedOption={c.MENU_LABELS.PRODUCTS} />
      </div>
    );
  }
}

export default withStyles(s)(ProductsPage);
