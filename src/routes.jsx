import React from 'react';
import { Route } from 'react-router';
import Befolkningsendring from './modules/views/befolkning/befolkningsendring';
import ArealDekke from './modules/views/areal/arealdekke';


export default (
  <Route path="/">
    <Route path="/befolkningsendring" component={Befolkningsendring} />
    <Route path="/arealdekke" component={ArealDekke} />
  </Route>
);
