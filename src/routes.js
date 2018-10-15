import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './component/Home/Home';
import Admin from './component/Admin/Admin';
import Contact from './component/Contact/Contact';
import Profile from './component/Profile/Profile';
import Portfolio from './component/Portfolio/Portfolio';


export default function routes(){
    return <Switch>
        <Route exact path= '/' component={Home}/>
        <Route path= '/Admin' component={Admin}/>
        <Route path='/Contact' component={Contact}/>
        <Route path='/Profile' component={Profile}/>
        <Route path='/Portfolio' component={Portfolio}/>
    </Switch>
}