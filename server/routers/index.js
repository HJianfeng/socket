const Router = require('koa-router');

const router = new Router();
router.prefix('/api');

router.get('/data', async (ctx, next) => {
  const { name } = ctx.query;
  ctx.type = 'json';
  ctx.body = {
    code: 200,
    message: '请求成功',
    data: `hello ${name || ''}`,
  };
  return next();
});
module.exports = router;
