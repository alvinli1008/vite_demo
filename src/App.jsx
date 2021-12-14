import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import enUSLocaleProvider from 'antd/lib/locale-provider/en_US';
import zhCNLocaleProvider from 'antd/lib/locale-provider/zh_CN';
import './App.css';
import { ConfigProvider } from 'antd';
import { Provider } from 'mobx-react';
import { IntlProvider } from 'react-intl';
import { util, RouteWithSubRoutes } from '~/components';

const app = util.getMergeApp();

function App() {
  const [loading, setLoading] = useState(false);

  // 当前系统的语言
  const currentLang = 'zh_CN';
  // antd 国际化
  const localeProvider = { zh_CN: zhCNLocaleProvider, en_US: enUSLocaleProvider }[currentLang];

  useEffect(() => {
    // const merge = util.mergeRoutes(app);
    // console.log('mergeRoutes', merge);

    return () => {};
  }, []);

  console.log('render', app);
  return (
    !loading && (
      <ConfigProvider locale={localeProvider}>
        <IntlProvider
           messages={app.messages}
          locale={currentLang.split('_')[0]}
        >
          <Provider {...app.models}>
            <Router>
              <Suspense
                fallback={<div className="flex justify-center items-center h-screen w-screen ">loading...</div>}
              >
                <Switch>
                  {app.routes.map((route, i) => (
                    <RouteWithSubRoutes key={`router-${i}`} {...route} />
                  ))}
                </Switch>
              </Suspense>
            </Router>
          </Provider>
        </IntlProvider>
      </ConfigProvider>
    )
  );
}

export default App;
