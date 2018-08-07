import React from 'react';
import ReservationsPage from './ReservationsPage';
import Layout from '../../components/Layout';

async function action() {
    return {
        title: 'Football One',
        chunks: ['reservations'],
        component: (
            <Layout>
                <ReservationsPage />
            </Layout>
        ),
    };
}

export default action;
