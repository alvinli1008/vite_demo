import * as React from 'react';
import demo from './models/demo';

export default ({ routes, models }) => {
  routes
    .filter((r) => r.path === '/')[0]
    .routes.push(
      ...[
        {
          path: '/demo',
          exact: true,
          component: React.lazy(() => import('./components'))
        }
      ]
    );

  Object.assign(models, { demo });
};
