import { Hono } from 'hono'
import { cors } from 'hono/cors'
// import rootRouter from '../routes/index';
import user from './routes/user';
import blogRouter from './routes/blog';
const app = new Hono()

app.use('/*',cors());

// version 1 of medium api's....
app.route('/api/v1/user',user);

app.route('/api/v1/blog',blogRouter);

app.get('/', (c) => {
  return c.text('Hello Hono!')
})


export default app
