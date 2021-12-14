import Home from './components/Home';

const homeRoutes = [
  {
    path: '/',
    exact: true
    // component: () => <div />
  }
];

export default async ({ routes, messages, locale }) => {
  routes.push(
    ...[
      {
        path: '/',
        component: Home,
        routes: homeRoutes
      }
    ]
  );
  Object.assign(messages, (await import(`./locales/${locale}.js`)).default);
};
