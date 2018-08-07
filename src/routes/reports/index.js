import React from 'react';
import ReportsPage from './ReportsPage';
import Layout from '../../components/Layout';

async function action() {
    return {
        title: 'Football One',
        chunks: ['reports'],
        component: (
            <Layout>
                <ReportsPage />
            </Layout>
        ),
    };
}

export default action;
