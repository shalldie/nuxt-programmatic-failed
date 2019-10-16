
import Koa from 'koa';
import consola from 'consola';
import Router from 'koa-router';
import { Nuxt, Builder } from 'nuxt';

const app = new Koa();

// Import and Set Nuxt.js options
import config from '../nuxt.config';
config['dev'] = !(app.env === 'production');


// router api
const router = new Router({
    prefix: '/api'
});
router.use('/index', require('./api/index').default.routes());
app.use(router.routes());


// router nuxt

// Instantiate nuxt.js
const nuxt = new Nuxt(config);

async function buildNuxt() {

    // Build in development
    if (config.dev) {
        const builder = new Builder(nuxt);
        await builder.build();
    }

    app.use(ctx => {
        ctx.status = 200;
        ctx.respond = false; // Bypass Koa's built-in response handling
        ctx.req['ctx'] = ctx; // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
        nuxt.render(ctx.req, ctx.res);
    })

}

// greenlock && start

(async () => {

    const { host, port } = nuxt.options.server;

    // nuxt 构建
    await buildNuxt();

    // production
    if (!config.dev) {
    }
    // development
    else {
        app.listen(port, host);
        consola.ready(`Server listening on http://${host}:${port}`);
    }

})();
