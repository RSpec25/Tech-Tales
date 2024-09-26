import { Link } from "react-router-dom"


export interface blogInp {
    author: {
        name: string
    },
    title: string,
    content: string,
    date: string,
    id: string
}
export const BlogCard = ({ blog }: { blog: blogInp }) => {
    return <Link to={`/blog/${blog.id}`} >
        <div className="border-b p-4 cursor-pointer">
            <div className="flex ">
                <Avatar name={blog.author.name} size="sm" />
                <div className="text-sm font-light px-2 flex justify-center flex-col">
                    {blog.author.name} &#9666;
                </div>
                <div className="text-sm font-extralight flex justify-center flex-col ">
                    {blog.date || "xx/xx/xxxx"}
                </div>
            </div>
            <div className="font-semibold pt-2 text-2xl">
                {blog.title}
            </div>
            <div className="font-normal text-lg">
                {blog.content.slice(0, 100) + "..."}
            </div>
            <div className="font-thin text-xs pt-4">
                {Math.ceil(blog.content.length / 100) + " minute(s) read"}
            </div>
        </div>
    </Link >
}

export function Avatar({ name, size }: { name: string, size: string }) {
    const initials = name.split(" ")[0][0] + name.split(" ")[1][0];
    return <div className={`relative inline-flex items-center justify-center ${size === 'sm' ? "w-6 h-6" : "h-10 w-10"} overflow-hidden bg-gray-200 rounded-full dark:bg-gray-600`}>
        <span className={`${size === 'sm' ? "text-sm" : "text-md"} text-gray-600 dark:text-gray-300`}>{initials}</span>
    </div>

}