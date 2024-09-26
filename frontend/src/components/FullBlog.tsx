import { Avatar } from "./BlogCard"
import { blogInp } from "./BlogCard"


// interface blogInp {
//     author: {
//         name: string
//     },
//     title: string,
//     content: string,
//     date: string,
// }

export const FullBlog = ({ blog }: { blog: blogInp }) => {
    const dt = new Date();
    const dte = dt.toISOString().split('T')[0];
    return <div className="flex justify-center ">
        <div className="grid grid-cols-12 px-10 py-5">
            <div className="col-span-8">
                <div className="font-extrabold text-4xl">
                    {blog.title}
                </div>
                <div className="font-light text-sm tex-slate-500">
                    published on {blog.date || dte}
                </div>
                <div className="pt-4">
                    {blog.content}
                </div>
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-3 pl-4 ">
                Author
                <div className="flex">
                    <div className="flex flex-col justify-center pr-4">
                        <Avatar name={blog.author.name} size="lg" />
                    </div>
                    <div>
                        <div className="font-bold text-xl pt-2">
                            {blog.author.name}
                        </div>
                        <div className="pt-2 text-slate-400 tex-md">
                            About: random catch phrase about the author.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}