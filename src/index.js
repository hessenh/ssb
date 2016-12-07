import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './store/configureStore';
import root from './containers/Root';

injectTapEventPlugin();

const store = configureStore();

render(
  root(store),
  document.getElementById('root'), // eslint-disable-line no-undef
);
