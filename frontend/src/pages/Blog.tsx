import { useBlog } from "../hooks"
import { useParams } from "react-router-dom";
import { FullBlog } from "../components/FullBlog";
import { AppBar } from "../components/AppBar";
import { BlogSkeleton } from "../components/BlogSkeleton";
// atom families / selector families
export const Blog = () => {
    const { id } = useParams();
    const { blog, loading } = useBlog({ id:id || ""})
    if (loading || !blog) {
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
        <FullBlog blog={blog} />
    </div>
}