import React from 'react';
import ClientsPage from './ClientsPage';
import Layout from '../../components/Layout';

async function action() {
    return {
        title: 'Football One',
        chunks: ['clients'],
        component: (
            <Layout>
                <ClientsPage />
            </Layout>
        ),
    };
}

export default action;
