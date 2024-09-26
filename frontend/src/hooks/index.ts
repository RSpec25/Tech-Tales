import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

export const useBlog = ({ id }: { id: String }) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState();
    // console.log("iddd", id)
    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            'headers': {
                "Authorization": localStorage.getItem("token"),
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                console.log(res.data);
                setBlog(res.data);
                setLoading(false);
            })
            .catch(e => {
                console.log("error", e);
            })
    }, [id])

    return {
        blog,
        loading
    }
}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            'headers': {
                "Authorization": localStorage.getItem("token"),
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                console.log(res.data);
                setBlogs(res.data.blogs);
                setLoading(false);
            })
            .catch(e => {
                console.log("error", e);
            })
    }, [])

    return {
        blogs,
        loading
    }
}