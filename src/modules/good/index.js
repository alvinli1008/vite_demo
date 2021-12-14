import React from 'react';

export default ({ routes, models }) => {
  routes
    .filter((r) => r.path === '/')[0]
    .routes.push(
      ...[
        {
          path: '/good',
          exact: true,
          component: React.lazy(() => import('./components'))
        }
      ]
    );
};
