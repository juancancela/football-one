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
      show: true
    },
    {
      key: 'id',
      label: 'id',
      show: true
    },
    {
      key: 'phone',
      label: 'Telefono',
      show: true
    },
    {
      key: 'fixed',
      label: 'Fijo',
      show: true
    },
    {
      key: 'instagram',
      label: 'Instagram',
      show: false
    },
    {
      key: 'facebook',
      label: 'Facebook',
      show: false
    },
    {
      key: 'mail',
      label: 'Email',
      show: true
    },
    {
      key: 'birthday',
      label: 'Cumpleaños',
      show: false
    }
  ]
}

class ClientsPage extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar selectedOption={c.MENU_LABELS.CLIENTS} />
        <div className={s.container}>
          <Table model="clients" name="cliente" columns={clientsColumns()}/>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ClientsPage);
