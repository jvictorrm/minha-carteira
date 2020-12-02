import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import FinancialTransactions from '../pages/FinancialTransactions';

const AppRoutes: React.FC = () => (
    <Layout>
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/financial-transactions/:type" component={FinancialTransactions} />
        </Switch>
    </Layout>
);

export default AppRoutes;