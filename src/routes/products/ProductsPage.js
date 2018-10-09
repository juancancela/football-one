import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ProductsPage.css';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Table from '../../components/Table/Table';
import * as c from '../../appConstants';

const productColumns = () => [
  {
    key: 'id',
    label: 'Id',
    type: c.DATA_TYPES.TEXT,
    show: true,
  },
  {
    key: 'name',
    label: 'Nombre',
    type: c.DATA_TYPES.TEXT,
    show: true,
  },
  {
    key: 'price',
    label: 'Precio',
    type: c.DATA_TYPES.TEXT,
    show: true,
  },
  {
    key: 'cost',
    label: 'Costo',
    type: c.DATA_TYPES.TEXT,
    show: true,
  },
  {
    key: 'stock',
    label: 'Stock',
    type: c.DATA_TYPES.TEXT,
    show: true,
  },
];

const createEmptyEntity = entityKeys => {
  const emptyEntity = {};
  entityKeys.forEach(key => {
    emptyEntity[key] = '';
  });

  return emptyEntity;
};

const createEntityKeys = columns => columns.map(column => column.key);

class ProductsPage extends React.Component {
  render() {
    const columns = productColumns();
    const entityKeys = createEntityKeys(columns);
    const emptyEntity = createEmptyEntity(entityKeys);
    return (
      <div>
        <NavigationBar selectedOption={c.MENU_LABELS.PRODUCTS} />
        <div className={s.container}>
          <Table
            model="products"
            name="productos"
            columns={columns}
            entityKeys={entityKeys}
            emptyEntity={emptyEntity}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ProductsPage);