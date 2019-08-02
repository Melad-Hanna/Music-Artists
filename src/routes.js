import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Header from './components//header';
import Artist from './components/Artist';

const Routes = ()=>{
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/Artist/:artist_id" component={ Artist } />
                <Route path='/' excat component={ Home } />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;