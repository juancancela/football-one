/**
 * Table component
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import * as _ from 'lodash';
import s from './Table.css';
import * as actions from '../../actions/appActions';
import * as c from '../../appConstants';

const OPERATION_TYPE = {
  EDIT: 'EDIT',
  CREATE: 'CREATE',
};

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEntityDetails: false,
      showEntityCreation: false,
      selectedEntity: null,
      emptyEntity: props.emptyEntity,
    };
  }

  renderHeader = columns => (
    <thead>
      <tr>
        {columns.map(
          column =>
            column.show ? (
              <th key={`${this.props.model}-${column.key}`}>{column.label}</th>
            ) : (
                ''
              ),
        )}
      </tr>
    </thead>
  );

  editEntity = entity =>
    this.setState({ selectedEntity: entity, showEntityDetails: true });

  renderRowControls = entity => (
    <div className="btn-group" role="group" aria-label="Controls">
      <button
        type="button"
        className="btn btn-success"
        onClick={() => this.editEntity(entity)}
      >
        <i className="fas fa-edit" /> Editar
      </button>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => this.removeEntity(entity.id)}
      >
        <i className="fas fa-trash" /> Borrar
      </button>
    </div>
  );

  renderRow = (entity, columns) => {
    const _filterEntityValues = entity => {
      const result = {};
      columns.forEach(column => {
        column.show
          ? (result[column.key] = { value: entity[column.key], column })
          : '';
      });
      return Object.values(result);
    };
    const values = _filterEntityValues(entity);
    return (
      <tr key={`${this.props.model}-${entity.id}`}>
        {values.map(value => {
          switch (value.column.type) {
            case c.DATA_TYPES.TEXT:
            case c.DATA_TYPES.DATE:
              return (
                <td key={`${this.props.model}-${value.value}`}>
                  {value.value}
                </td>
              );

            case c.DATA_TYPES.BOOLEAN:
              return (
                <td key={`${this.props.model}-${value.value}`}>
                  <i
                    className={
                      value.value === 'true' ? 'fas fa-check' : 'fas fa-times'
                    }
                  />
                </td>
              );
          }
        })}
        <td>{this.renderRowControls(entity)}</td>
      </tr>
    );
  };

  renderRows = (entities, columns) => (
    <tbody>{entities.map(entity => this.renderRow(entity, columns))}</tbody>
  );

  removeEntity = id => {
    const { model } = this.props;
    this.props.removeEntity(model, id);
  };

  updateEntity = updatedEntity => {
    const { model } = this.props;
    this.setState({ selectedEntity: null, showEntityDetails: false });
    this.props.updateEntity(model, updatedEntity);
  };

  saveEntity = createdEntity => {
    const { model } = this.props;
    this.setState({
      selectedEntity: null,
      showEntityDetails: false,
      showEntityCreation: false,
    });
    this.props.createEntity(model, createdEntity);
  };

  cancelSaveEntity = () =>
    this.setState({
      selectedEntity: null,
      showEntityDetails: false,
      showEntityCreation: false,
    });

  toggleShowEntityCreation = () => {
    const { showEntityCreation } = this.state;
    this.setState({ showEntityCreation: !showEntityCreation });
  };

  renderTableControls = () => {
    const { name } = this.props;
    return (
      <div>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => this.toggleShowEntityCreation()}
        >
          <i className="fas fa-plus-circle" /> Agregar {name}
        </button>
      </div>
    );
  };

  updateSelectedEntityField = (operationType, entity, field, event) => {
    entity[field] = event.target.value;
    switch (operationType) {
      case OPERATION_TYPE.CREATE:
        return this.setState({ emptyEntity: entity });
      case OPERATION_TYPE.EDIT:
        return this.setState({ selectedEntity: entity });
    }
  };

  renderEntityDetails = selectedEntity =>
    this.renderEntityForm(OPERATION_TYPE.EDIT, selectedEntity);

  renderEntityCreation = emptyEntity =>
    this.renderEntityForm(OPERATION_TYPE.CREATE, emptyEntity);

  renderEntityForm = (operationType, entity) => {
    const { entityKeys } = this.props;
    return (
      <span>
        {entityKeys.map(field => {
          if (operationType === OPERATION_TYPE.EDIT && field === 'id') return;
          return (
            <div className="form-group">
              <label className={s.tableEditLabel}>{field}</label>
              <input
                className={s.tableEditInput}
                value={entity[field]}
                onChange={event =>
                  this.updateSelectedEntityField(
                    operationType,
                    entity,
                    field,
                    event,
                  )
                }
                placeholder={entity[field]}
              />
            </div>
          );
        })}
        <div className="btn-group" role="group" aria-label="Controls">
          <button
            onClick={() =>
              operationType === OPERATION_TYPE.EDIT
                ? this.updateEntity(entity)
                : this.saveEntity(entity)
            }
            className="btn btn-primary"
          >
            Guardar
          </button>
          <button
            onClick={() => this.cancelSaveEntity()}
            className="btn btn-danger"
          >
            Cancelar
          </button>
        </div>
      </span>
    );
  };

  componentDidMount = () => this.props.fetchEntities(this.props.model);

  render() {
    const { entities, isLoading, error, columns } = this.props;
    const {
      selectedEntity,
      emptyEntity,
      showEntityDetails,
      showEntityCreation,
    } = this.state;
    if (error) return <div>Error!</div>;
    if (isLoading) return <div>Loading...</div>;
    if (!entities || entities.length === 0) return <div>No data.</div>;
    return (
      <div>
        <div className={s.sectionContainer}>
          {showEntityCreation ? this.renderEntityCreation(emptyEntity) : ''}
        </div>
        <div className={`${s.tableContainer}`}>
          <div className={s.sectionContainer}>
            {showEntityDetails
              ? this.renderEntityDetails(selectedEntity)
              : this.renderTableControls()}
          </div>
          <table className={`${s.appTable} table table-dark`}>
            {this.renderHeader(columns)}
            {this.renderRows(entities, columns)}
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.entities.error,
  entities: state.entities.entities,
  isLoading: state.entities.isLoading,
});

export default connect(mapStateToProps, actions)(withStyles(s)(Table));
