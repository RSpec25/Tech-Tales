import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"


//get name of the person logged in.. get initials
export const AppBar = () => {
    return <div className="border-b flex justify-between px-10 py-2 ">
        <Link to="/blogs" className="text-lg flex flex-col justify-center cursor-pointer">
            TechTales
        </Link>
        <div className="flex">
            <div className="mr-2 justify-center flex flex-col text-md text-slate-500">
                Hey Rishit,
            </div>
            <div>
                <Link to={"/publish"}>
                    <button type="button" className="justify-center flex flex-col mt-2 mr-2 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-3 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        New
                    </button>
                </Link>
            </div>
            <div className="justify-center flex flex-col" >
                <Avatar size="lg" name="H K" />
            </div>
        </div>

    </div>
}