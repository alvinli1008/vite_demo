
const getMergeApp = () => {
  const _app = {
    routes: [],
    models: {}
  };

  const context = import.meta.globEager('../modules/**/index.js');
  Object.keys(context)
    .sort((a) => (a == '../modules/frame/index.js' ? -1 : 1))
    .map((key) => context[key].default(_app));

  console.log('_app', _app);
  return _app;
};

export default {
  getMergeApp
};
