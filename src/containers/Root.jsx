import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import NavigationBar from '../modules/views/navigation/navigation';

import Extra from './Extra';
import routes from '../routes';
import theme from '../theme';

const muiTheme = getMuiTheme(theme);

export default (store) => {
  const history = syncHistoryWithStore(browserHistory, store);
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <Provider store={store}>
        <div>
          <NavigationBar />
          <Router history={history}>
            {routes}
          </Router>
          {Extra}
        </div>
      </Provider>
    </MuiThemeProvider>
  );
};
