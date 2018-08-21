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

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedEntity: null,
            isAddNewEntityDialogVisible: false
        }
    };

    renderHeader = (columns) => {
        return (
            <thead>
                <tr>
                    {columns.map(column => (column.show ? <th key={`${this.props.model}-${column.key}`}>{column.label}</th> : ''))}
                </tr>
            </thead>
        );
    };

    editEntity = (entity) => this.setState({ selectedEntity: entity });

    renderRowControls = (entity) => {
        return (
            <div className="btn-group" role="group" aria-label="Controls">
                <button type="button" className="btn btn-success" onClick={() => this.editEntity(entity)}>
                    <i className="fas fa-edit"></i> Editar
                </button>
                <button type="button" className="btn btn-danger" onClick={() => this.removeEntity(entity.id)}>
                    <i className="fas fa-trash"></i> Borrar
                </button>
            </div>
        )
    }

    renderRow = (entity, columns) => {
        const _filterEntityValues = (entity) => {
            const result = {};
            columns.forEach(column => {
                column.show ? result[column.key] = entity[column.key] : '';
            });
            return Object.values(result);
        };
        const values = _filterEntityValues(entity);
        console.log("Value => ", values);
        return (
            <tr key={`${this.props.model}-${entity.id}`}>
                {values.map(value => (<td key={`${this.props.model}-${value}`}>{value}</td>))}
                <td>{this.renderRowControls(entity)}</td>
            </tr>
        )
    };

    renderRows = (entities, columns) => {
        return (
            <tbody>
                {entities.map(entity => this.renderRow(entity, columns))}
            </tbody>
        )
    };

    removeEntity = (id) => {
        const { model } = this.props;
        this.props.removeEntity(model, id);
    };

    saveEntity = (updatedEntity) => {
        const { model } = this.props;
        this.setState({ selectedEntity: null });
        this.props.updateEntity(model, updatedEntity);
    };

    cancelSaveEntity = () => this.setState({ selectedEntity: null });

    toggleIsAddNewEntityDialogVisible = () => {
        const isAddNewEntityDialogVisible = !this.state.isAddNewEntityDialogVisible;
        this.setState({ isAddNewEntityDialogVisible });
    };

    renderTableControls = () => {
        const { name } = this.props;
        return (
            <div>
                <button type="button"
                    className="btn btn-success"
                    onClick={() => this.toggleIsAddNewEntityDialogVisible()}>
                    <i className="fas fa-plus-circle"></i> Agregar {name}
                </button>
            </div>
        )
    };

    updateSelectedEntityField = (selectedEntity, field, event) => {
        selectedEntity[field] = event.target.value;
        this.setState({ selectedEntity });
    }

    renderEntityDetails = (selectedEntity) => {
        const entityFields = Object.keys(selectedEntity);
        console.log("entity fields: ", entityFields);
        return (
            <span>
                {entityFields.map(field =>
                    field != 'id' ? <div className="form-group">
                        <label>{field}</label>
                        <input value={selectedEntity[field]}
                            onChange={event => this.updateSelectedEntityField(selectedEntity, field, event)}
                            placeholder={selectedEntity[field]} />
                    </div> : ''
                )}
                <div className="btn-group" role="group" aria-label="Controls">
                    <button onClick={() => this.saveEntity(selectedEntity)} className="btn btn-primary">Guardar</button>
                    <button onClick={() => this.cancelSaveEntity()} className="btn btn-danger">Cancelar</button>
                </div>
            </span>
        )
    };

    renderCreateEntity = (entity) => {
        return (
            <div>
                RENDER CREATE ENTITY
            </div>
        )
    };

    componentDidMount = () => {
        const { model } = this.props;
        this.props.fetchEntities(model);
    };

    render() {
        const { entities, isLoading, error, columns } = this.props;
        const { selectedEntity, isAddNewEntityDialogVisible } = this.state;
        if (error) {
            return (<div>Error!</div>)
        }
        if (isLoading) {
            return (<div>Loading...</div>)
        }
        if (!entities || entities.length === 0) {
            return (<div>No data.</div>)
        }
        return (
            <div className={`${s.tableContainer}`}>
                <div className={s.sectionContainer}>
                    {!selectedEntity ? this.renderTableControls() : this.renderEntityDetails(selectedEntity)}
                </div>
                <div className={s.sectionContainer}>
                    {!isAddNewEntityDialogVisible ? '' : this.renderCreateEntity(entities[0])}
                </div>
                <table className={`${s.appTable} table table-dark`}>
                    {this.renderHeader(columns)}
                    {this.renderRows(entities, columns)}
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    error: state.entities.error,
    entities: state.entities.entities,
    isLoading: state.entities.isLoading
});

export default connect(mapStateToProps, actions)(withStyles(s)(Table));
