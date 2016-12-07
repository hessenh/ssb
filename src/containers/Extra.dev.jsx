import React from 'react';
import DevTools from './DevTools';

export default !window.devToolsExtension ? <DevTools /> : null; // eslint-disable-line no-undef
