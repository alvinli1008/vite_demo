import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { RouteWithSubRoutes } from '~/components';

const Home = ({ routes, history }) => {
  return (
    <React.Fragment>
      <Suspense fallback={<div>loading....</div>}>
        <Switch>
          {(routes || [])
            // .sort((a, b) => (a.order || 0) - (b.order || 0))
            .map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
        </Switch>
      </Suspense>
    </React.Fragment>
  );
};

export default Home;
