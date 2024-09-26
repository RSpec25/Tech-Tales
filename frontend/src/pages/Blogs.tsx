import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { Footer } from "../components/Footer";
import { useBlogs } from "../hooks";
import { BlogSkeleton } from "../components/BlogSkeleton";


export const Blogs = () => {
    const { blogs, loading } = useBlogs();

    // create skeletons or loaders 
    if (loading) {
        return <div>
            <AppBar />
            <div className="flex justify-center">
                <div className="flex flex-col">
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                </div>
            </div>
        </div>
    }

    return <div>
        <AppBar />
        <div className="flex justify-center ">
            <div className="flex flex-col max-w-xl justify-center">
                {blogs.map((blog) =>
                    <div >
                        <BlogCard blog={blog} />
                    </div>
                )}
            </div>
        </div>
        <Footer />
    </div>
}

// store it in usestate
// store it in context variable
// store directly here
// use custom hooks useBlog
// if used in 10 diffr places then use recoil 
{/* <div >
                    <BlogCard
                        id=""
                        name="harkirat S"
                        title="VOID - title of my sex life"
                        publish="2nd Feb 2023"
                        content="harkitart is my bitch ass super talented nigga.harkitart is my bitch ass super talented nigga.
        harkitart is my bitch ass super talented nigga.harkitart is my bitch ass super talented nigga."/>
                </div>
                <div >
                    <BlogCard id="" name="harkirat S"
                        title="VOID - title of my sex life"
                        publish="2nd Feb 2023"
                        content="harkitart is my bitch ass super talented nigga.harkitart is my bitch ass super talented nigga.
        harkitart is my bitch ass super talented nigga.harkitart is my bitch ass super talented nigga."/>
                </div> */}