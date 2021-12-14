// 模块 index.js routes/models
const getMergeApp = () => {
  const app = { routes: [], models: {}, messages: {}, locale: 'zh_CN' };

  const context = import.meta.globEager('../modules/**/index.js');
  Object.keys(context)
    .sort((a) => (a == '../modules/frame/index.js' ? -1 : 1))
    .map((key) => context[key].default(app));
  return app;
};

export default {
  getMergeApp
};
