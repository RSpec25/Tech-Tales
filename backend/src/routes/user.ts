import {Hono} from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { sign } from 'hono/jwt'
import { signinInp, signupInp } from '@rspec25/techtales-common'


const user = new Hono<{
    Bindings:{
        DATABASE_URL: string,
        JWT_SECRET: string
    }
}>();


//c:- context has all the request data,response data, env variables.
// in wrngler.toml we stored the passwords and then use it in here inside context.

user.post('/signup',async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL // for type error pass generic in hono or use @ts-ignores
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const success = signupInp.safeParse(body);
    if(!success){
        return c.json({
            "Msg": "Invalid Input Types"
        })
    }
    // zod and hashing remains.....
    try {
        const userr = await prisma.user.create({
            data: {
                email: body.email,
                password: body.password,
                name: body.name
            }
        })   
        // @ts-ignore
        const jwt = await sign({id: userr.id}, c.env.JWT_SECRET);
        return c.text(jwt)
    } catch (error) {
        c.status(411);
        return c.text(`Error: ${error}`);
    }
});

// Sign-in route
user.post('/signin',async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
    const body = await c.req.json();
    const success = signinInp.safeParse(body);
    if(!success){
        return c.json({
            "Msg": "Invalid Input Types"
        })
    }

    try {
        const userr = await prisma.user.findFirst({
            where: {
                email: body.email,
                password: body.passsword,
            }
        })   
        if(!userr){
            c.status(403); // for unauthorised
            return c.text("Invalid")
        }
        const jwt = await sign({id: userr.id}, c.env.JWT_SECRET);
        return c.text(jwt)
    } catch (error) {
        c.status(411);
        return c.text(`Error: ${error}`);
    }


    const token = c.req.header('authorisation');
    // const id = c.req('id');
    // const pswrd = c.req.body('password');
    return c.json("done")

})

export default user;