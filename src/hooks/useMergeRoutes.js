
const useMergeRoutes = (app) => {
  const context = import.meta.globEager('../modules/*/index.js');
  const t = Object.keys(context)
  .sort((a) => (a == '../modules/frame/index.js' ? -1 : 1))
  .map((key) => context[key].default(app));

  console.log('context', context, t);
    return t;
};

export default useMergeRoutes;
