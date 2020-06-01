const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? '/chibbis/' : '';

module.exports = {
  base: routerBase,
};
