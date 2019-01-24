import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './component/Home/Home';
import Admin from './component/Admin/Admin';
import Contact from './component/Contact/Contact';
import Blog from './component/Blog/Blog';
import Portfolio from './component/Portfolio/Portfolio';
import About from './component/About/About';


export default function routes(){
    return <Switch>
        <Route exact path= '/' component={Home}/>
        <Route path= '/Admin' component={Admin}/>
        <Route path='/Contact' component={Contact}/>
        <Route path='/Blog' component={Blog}/>
        <Route path='/About' component={About}/>
        <Route path='/Portfolio' component={Portfolio}/>
    </Switch>
}