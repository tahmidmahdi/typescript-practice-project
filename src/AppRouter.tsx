import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const ProductDetails = React.lazy(
    () => import('./components/home/ProductDetails')
);
// import ProductDetails from './components/home/ProductDetails';
// import ProductDetails from './components/home/ProductDetails';
const Home = React.lazy(() => import('./pages/Home/Home'));
const Help = React.lazy(() => import('./pages/Help/Help'));
const AppRouter: React.FC = ({ children }) => {
    return (
        <Router>
            {children}
            <Switch>
                <Suspense
                    fallback={
                        <div className="text-center">
                            <h1 className="text-warning">Loading...</h1>
                        </div>
                    }
                >
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/help" component={Help}></Route>
                    <Route
                        exact
                        path="/product/:id"
                        component={ProductDetails}
                    ></Route>
                </Suspense>
            </Switch>
        </Router>
    );
};

export default AppRouter;
