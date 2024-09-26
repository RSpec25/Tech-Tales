import { useState } from "react"
import { AppBar } from "../components/AppBar"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const navigate = useNavigate();

    async function publishPost(){
        // const dt = new Date();
        // const dte = dt.toISOString().split('T')[0];
        const res = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
            title,
            content: desc,
        }, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        navigate(`/blog/${res.data.id}`);
    }

    return <div>
        <AppBar />
        <div className="m-8 flex justify-center">
            <div className="max-w-screen-md w-full">
                <div>
                    <label className="w-full m-4 block mb-2 text-2xl font-medium text-gray-900 dark:text-white">Title</label>
                    <textarea onChange={(e) => { setTitle(e.target.value) }} rows={1} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Give a title to your blog..."></textarea>
                </div>
                <div>
                    <label className="m-4 block mb-2 text-xl font-medium text-gray-900 dark:text-white">Your message</label>
                    <textarea onChange={(e) => { setDesc(e.target.value) }} rows={7} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                </div>
                <button onClick={publishPost}
                    type="button" className="mt-7 justify-center flex flex-col mt-2 mr-2 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-3 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    Post
                </button>
            </div>
        </div>
    </div >
}

// draft js can be used to make real text editor.