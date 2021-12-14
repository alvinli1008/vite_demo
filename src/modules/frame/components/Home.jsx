import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { RouteWithSubRoutes } from '~/components';
import PropTypes from 'prop-types';

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

Home.propTypes = {
  routes: PropTypes.array,
  history: PropTypes.object
};

export default Home;
