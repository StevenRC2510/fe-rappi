import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';

// import ProtectetdRoute from './ProtectedRoute';
// Routes

const Home = React.lazy(() => import('../pages/home'));
// const ShoppingCart = React.lazy(() => import('../pages/shoppingCart'));
// tslint:disable-next-line:function-name
export default function AppRouter() {
  return (
    // <Suspense fallback={<h1>Loading...</h1>}>
    // <Route path="/shopping-cart" exact component={ShoppingCart} />
    <Suspense fallback={<CircularProgress color="primary" />}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home/:id?" exact component={Home} />
      </Switch>
    </Suspense>
  );
}
