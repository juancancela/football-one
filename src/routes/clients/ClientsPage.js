import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ClientsPage.css';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Table from '../../components/Table/Table';
import * as c from '../../appConstants';

const clientsColumns = () => {
  return [
    {
      key: 'name',
      label: 'Nombre',
      type: c.DATA_TYPES.TEXT,
      show: true
    },
    {
      key: 'id',
      label: 'id',
      type: c.DATA_TYPES.TEXT,
      show: true
    },
    {
      key: 'phone',
      label: 'Telefono',
      type: c.DATA_TYPES.TEXT,
      show: true
    },
    {
      key: 'fixed',
      label: 'Fijo',
      type: c.DATA_TYPES.BOOLEAN,
      show: true
    },
    {
      key: 'instagram',
      label: 'Instagram',
      type: c.DATA_TYPES.TEXT,
      show: false
    },
    {
      key: 'facebook',
      label: 'Facebook',
      type: c.DATA_TYPES.TEXT,
      show: false
    },
    {
      key: 'mail',
      label: 'Email',
      type: c.DATA_TYPES.TEXT,
      show: true
    },
    {
      key: 'birthday',
      label: 'Cumpleaños',
      type: c.DATA_TYPES.DATE,
      show: false
    }
  ]
};

const createEmptyEntity = (entityKeys) => {
  let emptyEntity = {}
  entityKeys.forEach(key => {
    emptyEntity[key] = ""
  });

  return emptyEntity;
};

const createEntityKeys = columns => columns.map(column => column.key)


class ClientsPage extends React.Component {
  render() {
    const columns = clientsColumns();
    const entityKeys = createEntityKeys(columns);
    const emptyEntity = createEmptyEntity(entityKeys);
    return (
      <div>
        <NavigationBar selectedOption={c.MENU_LABELS.CLIENTS} />
        <div className={s.container}>
          <Table model="clients" name="cliente"
            columns={columns}
            entityKeys={entityKeys} 
            emptyEntity={emptyEntity}/>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ClientsPage);
