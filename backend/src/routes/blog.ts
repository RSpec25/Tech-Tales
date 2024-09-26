import { Hono } from 'hono'
const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
    },
    Variables: {
        userId: string
    }
}>();
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { decode, verify } from 'hono/jwt';
import { createBlogInp, updateBlogInp} from '@rspec25/techtales-common'

blogRouter.use('/*', async (c, next) => {
    const authHeader = c.req.header('Authorization') || ""; // type accepted only string, returning string | undefined
    try {
        const user = await verify(authHeader, c.env.JWT_SECRET);
        if (user) {
            c.set("userId", String(user.id));
            await next()
        }
        else {
            c.status(403);
            return c.json({
                msg: "Invalid"
            })
        }
    } catch (e) {
        c.status(403);
        return c.json({
            msg: "Invalid"
        })
    }
})

//new blog add api...
blogRouter.post('/', async (c) => {
    const body = await c.req.json();
    const success = createBlogInp.safeParse(body);
    if(!success){
        return c.json({
            Message: "Invalid Input Types"
        })
    }
    const userId = c.get("userId");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
    const blog = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: userId,
            date: body.date
        }
    })
    return c.json({
        id: blog.id
    })
})

// blog update api....
blogRouter.put('/', async (c) => {
    const body = await c.req.json();
    const success = updateBlogInp.safeParse(body);
    if(!success){
        return c.json({
            Message: "Invalid Input Types"
        })
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const blog = await prisma.post.update({
        where: {
            id: body.id
        },
        data: {
            title: body.title,
            content: body.content,
        }
    })
    c.json({
        msg: "blog updated!"
    })
});


// get all posts
// add pagination
blogRouter.get('/bulk', async (c) => {
    // const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    console.log("inside api bulk");
    const blog = await prisma.post.findMany({
        select: {
            title: true,
            id: true,
            content: true,
            date: true,
            author: {
                select: {
                    name: true,
                }
            }
        }
    })
    if (!blog) {
        console.log("NO values");
        return c.text("no value fetched");
    }
    return c.json({
        blogs: blog
    })
})

//get post by id
blogRouter.get('/:id', async (c) => {
    const id = c.req.param('id')
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    try {
        const blog = await prisma.post.findFirst({
            where: {
                id: id
            },
            select: {
                title: true,
                content: true,
                author: {
                    select: {
                        name: true,
                    }
                }
            }
        })
        return c.json(blog)
    } catch (error) {
        c.status(411);
        console.log("errorr")
        return c.text(`error: ${error}`);
    }
})


export default blogRouter