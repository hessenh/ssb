import { applyMiddleware } from 'redux';

import setupSentry from '../utils/setupSentry';
import sentryMiddleware from './sentryMiddleware';

export default [
  applyMiddleware(sentryMiddleware(setupSentry)),
];
