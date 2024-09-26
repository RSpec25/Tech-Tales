import { Hono } from 'hono'
import user from './user';
import blog from './blog';
const app = new Hono();

// user auth api...
app.route('/user',user);

//blogs api...
app.route('/blog',blog);

export default app