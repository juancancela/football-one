import React from 'react';
import AccountingPage from './AccountingPage';
import Layout from '../../components/Layout';

async function action() {
    return {
        title: 'Football One',
        chunks: ['accounting'],
        component: (
            <Layout>
                <AccountingPage />
            </Layout>
        ),
    };
}

export default action;
