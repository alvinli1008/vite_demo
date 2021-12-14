import React, { useState, useEffect, Suspense, useRef } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import { ConfigProvider } from 'antd';
import { Provider } from 'mobx-react';
import { util, RouteWithSubRoutes } from '~/components';

const app = util.getMergeApp();

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // const merge = util.mergeRoutes(app);
    // console.log('mergeRoutes', merge);

    return () => {};
  }, []);

  console.log('render', app);
  return (
    !loading && (
      <ConfigProvider>
        <Provider {...app.models}>
          <Router>
            <Suspense fallback={<div className="flex justify-center items-center h-screen w-screen ">loading...</div>}>
              <Switch>
                {app.routes.map((route, i) => (
                  <RouteWithSubRoutes key={`router-${i}`} {...route} />
                ))}
              </Switch>
            </Suspense>
          </Router>
        </Provider>
      </ConfigProvider>
    )
  );
}

export default App;
