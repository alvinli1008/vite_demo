import React from 'react';

export default async ({ routes, models, messages, locale }) => {
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
  Object.assign(messages, (await import(`./locales/` + locale)).default);
};
