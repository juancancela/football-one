import React from 'react';
import HomePage from './HomePage';
import Layout from '../../components/Layout';

async function action() {
  return {
    title: 'Football One',
    chunks: ['home'],
    component: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  };
}

export default action;
