// const Router = require('@koa/router')
import Koa from 'koa';
const app = new Koa();
const port = 3000;
// response
app.use(ctx => {
    if (ctx.path === '/') {
        ctx.body = '<h1>HOSGELDINIZ</h1>';
    } else if(ctx.path === '/index'){
        ctx.body = '<h1>INDEX SAYFASINA HOSGELDINIZ</h1>'

    } else if(ctx.path === '/hakkimda'){
        ctx.body = '<h1>HAKKIMDA SAYFASINA HOSGELDINIZ</h1>'
    } else if(ctx.path === '/iletisim'){
        ctx.body = '<h1>ILETISIM SAYFASINA HOSGELDINIZ</h1>'
    } else {
        ctx.body = '<h1>Sayfa bulunamadi</h1>'
    }
});

app.listen(port, () => {
    console.log(`Server port ${port}'de baslatildi`);
});