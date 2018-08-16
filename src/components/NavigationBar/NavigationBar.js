import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './NavigationBar.css';
import Link from '../Link';
import { MENU_OPTIONS } from '../../appConstants';

class NavigationBar extends React.Component {
  renderSectionButton(option, selectedOption) {
    const isSelectedSection = selectedOption === option.label.toUpperCase();
    return (
      <button
        key={`${option.label}-nav-btn`}
        type="button"
        className={`btn ${
          isSelectedSection ? 'btn-success' : 'btn-primary'
        } app-btn`}
      >
        <Link className={s.link} to={option.link}>
          {option.label}
        </Link>
      </button>
    );
  }

  renderSectionButtons(selectedOption) {
    const menuOptions = [];
    MENU_OPTIONS.forEach(option =>
      menuOptions.push(this.renderSectionButton(option, selectedOption)),
    );
    return <div>{menuOptions}</div>;
  }

  render() {
    const { selectedOption } = this.props;
    return (
      <div className={s.container}>
        {this.renderSectionButtons(selectedOption)}
      </div>
    );
  }
}

export default withStyles(s)(NavigationBar);
