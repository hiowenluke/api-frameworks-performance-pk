
const router = require('koa-router')();
const Koa = require('koa');
const qs = require('qs');

const app = new Koa();

router.get('/hi', (ctx) => {
	ctx.body = qs.parse(ctx.request.query);
});

app.use(router.routes());
app.listen(3333);
