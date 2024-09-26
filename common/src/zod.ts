// export zod variables to backend and type inference to frontend
// deploying to npm 

import z from 'zod';

export const signupInp = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()
})

export const signinInp = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})

export const createBlogInp = z.object({
    content: z.string(),
    title: z.string()
})

export const updateBlogInp = z.object({
    content: z.string(),
    title: z.string(),
    id: z.string()
})

export type SignupType = z.infer<typeof signupInp >
export type SigninType = z.infer<typeof signinInp >
export type CreateBlogType = z.infer<typeof createBlogInp >
export type UpdateBlogType = z.infer<typeof updateBlogInp >

// npm login
// npm publish --access public
// name repo/medium-common
// main = dist/index.js
// .npmignore add src
// in dist we have js and ts file. ts file for types 