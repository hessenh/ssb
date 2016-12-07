import Raven from 'raven-js';
import { environment } from '../modules/environment';

const sentryDsn = 'https://a2841264fbe645b8bbcf863ce2492e7d@app.getsentry.com/75462';

export default () => {
  if (environment.SENTRY_ENABLED) {
    Raven.config(sentryDsn).install();
  }
};
