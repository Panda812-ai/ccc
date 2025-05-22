import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import AboutUs from '../pages/AboutUs';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';
import NotFound from '../pages/NotFound';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';

const setRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/menu" component={Menu} />
                <Route path="/about" component={AboutUs} />
                <Route path="/contact" component={Contact} />
                <Route path="/blog" component={Blog} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
};

export default setRoutes;