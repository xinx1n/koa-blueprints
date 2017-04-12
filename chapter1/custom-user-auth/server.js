const Koa = require('koa');
const Router = require('koa-router');
const views = require('koa-views');

const app = new Koa();
const router = new Router();

app.use(views(__dirname + '/views', {
  map: { jade: 'jade', html: 'mustache' }
}));

router.get('/', async (ctx, next) => {
  await ctx.render('index.jade', {
    pageTitle: '首页'
  });
});

router.get('/app', async (ctx, next) => {
  await ctx.render('app.html', {
    pageTitle: '应用控制台'
  });
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);
console.log('Koa started on port 3000');
