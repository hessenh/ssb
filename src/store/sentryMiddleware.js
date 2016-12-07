import Raven from 'raven-js';

export default function sentryMiddleware(setupSentry) {
  if (!Raven.isSetup()) {
    setupSentry();
  }

  return store => next => (action) => {
    try {
      next(action);
    } catch (err) {
      // Send the report.
      Raven.captureException(err, {
        extra: {
          action,
          state: store.getState(),
        },
      });
    }
  };
}
