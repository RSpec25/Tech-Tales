import z from 'zod';
export declare const signupInp: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    name?: string | undefined;
}, {
    email: string;
    password: string;
    name?: string | undefined;
}>;
export declare const signinInp: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const createBlogInp: z.ZodObject<{
    content: z.ZodString;
    title: z.ZodString;
}, "strip", z.ZodTypeAny, {
    content: string;
    title: string;
}, {
    content: string;
    title: string;
}>;
export declare const updateBlogInp: z.ZodObject<{
    content: z.ZodString;
    title: z.ZodString;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    content: string;
    title: string;
    id: string;
}, {
    content: string;
    title: string;
    id: string;
}>;
export type SignupType = z.infer<typeof signupInp>;
export type SigninType = z.infer<typeof signinInp>;
export type CreateBlogType = z.infer<typeof createBlogInp>;
export type UpdateBlogType = z.infer<typeof updateBlogInp>;
