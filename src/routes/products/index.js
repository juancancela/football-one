import React from 'react';
import ProductsPage from './ProductsPage';
import Layout from '../../components/Layout';

async function action() {
    return {
        title: 'Football One',
        chunks: ['products'],
        component: (
            <Layout>
                <ProductsPage />
            </Layout>
        ),
    };
}

export default action;
