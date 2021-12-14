import React from 'react';
import demo from './models/demo';

export default async ({ routes, models, messages, locale }) => {
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
  Object.assign(messages, (await import(`./locales/${locale}.js`)).default);
};
