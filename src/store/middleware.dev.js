/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */

import { persistState } from 'redux-devtools';
import DevTools from '../containers/DevTools';

export default [
  window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/,
    ),
  ),
];
