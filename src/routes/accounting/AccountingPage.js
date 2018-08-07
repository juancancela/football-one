import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './AccountingPage.css';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import * as c from '../../constants';

class AccountingPage extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar selectedOption={c.MENU_LABELS.ACCOUNTING} />
            </div>
        );
    }
}

export default withStyles(s)(AccountingPage);
