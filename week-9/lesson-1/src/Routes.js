import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainContextProvider from './context/MainContext';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';
import HomePage from './pages/HomePage';

const Routes = () => {
    return (
        <MainContextProvider>
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/create" component={CreatePage} />
            <Route path="/edit/:id" component={EditPage} />
            <Redirect to="/" />
        </Switch>
        </BrowserRouter>
        </MainContextProvider>
    );
};

export default Routes;


































































