import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Display from './components/Display.jsx';
import CRUD from './components/CRUD.jsx';

export default (
        <Switch>
            <Route exact path="/" component={CRUD}/>
            <Route path="/display" component={Display}/>
        </Switch>
)