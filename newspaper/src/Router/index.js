import Search from '../pages/Search';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SearchR  from '../pages/Search';
import Home from '../containers/Home';
import  Content  from '../containers/Contents';
import Sport from '../components/Sports';
import News from '../components/News';
const routes = () => {
    return (
        <>
        <Switch>
            <Route path="/" exact component = {Home}></Route>
            <Route path="/the-thao" component = {Sport}></Route>
            <Route path="/thoi-su" component = {News}></Route>
            <Route path="/search" component = {SearchR}></Route>
            <Route path="/post/:plug" component = {Content}></Route>
        </Switch>
        </>
    );
};

export default routes;