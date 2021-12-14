import Home from './components/Home';

const homeRoutes = [
  {
    path: '/',
    exact: true,
    // component: () => <div />
  }
];

export default ({ routes }) => {
  routes.push(
    ...[
      {
        path: '/',
        component: Home,
        routes: homeRoutes
      }
    ]
  );
};
