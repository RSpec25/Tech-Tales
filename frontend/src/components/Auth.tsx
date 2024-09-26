import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { SignupType } from "@rspec25/techtales-common";
// import types from common folder after deploying that to npm
// trpc - use if u want extremely strict types

export const Auth = ({ type }: { type: "signin" | "signup" }) => {
    const navigate = useNavigate();
    const [postInp, setPostInp] = useState<SignupType>({
        email: "",
        password: "",
        name: ""
    })

    async function sendReq() {
        try {
            const res = await axios.post(`${BACKEND_URL}/api/v1/user/${type === 'signup' ? 'signup' : 'signin'}`, postInp);
            const jwt = res.data;
            localStorage.setItem("token", jwt);
            navigate('/blogs')
        } catch (error) {
            alert("There has been error while signing up!")
            // alert user

        }
    }
    return <div className="justify-center h-screen flex flex-col">
        {/* {JSON.stringify(postInp)} */}
        <div className="flex justify-center">
            <div >
                <div className="text-center text-xl font-extrabold">
                    Create an account
                </div>
                <div className="text-slate-500 pb-3 px-10">
                    {type === 'signup' ? "Already have an account?" : "Don't have an account?"}
                    <Link to={type === 'signup' ? "/signin" : "/signup"} className="pl-2 underline">
                        {type === 'signup' ? "Login" : "Sign-up"}
                    </Link>
                </div>
                {
                    type === 'signup' ? <div >
                        <LabelledInp value="Name" placeholder="enter your name..." onChange={(e) =>
                            setPostInp({
                                ...postInp,
                                name: e.target.value
                            })} />
                    </div> : null
                }
                <div >
                    <LabelledInp value="Email" type="Email" placeholder="example@gmail.com" onChange={(e) =>
                        setPostInp({
                            ...postInp,
                            email: e.target.value
                        })} />
                </div>
                <div >
                    <LabelledInp value="Password" type="password" placeholder="@#$&*%" onChange={(e) =>
                        setPostInp({
                            ...postInp,
                            password: e.target.value
                        })} />
                </div>
                <button onClick={sendReq} type="button" className="mt-4 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === 'signup' ? "Sign-Up" : "Sign-In"}</button>
            </div>
        </div>
    </div>
}

interface LabelledInpType {
    value: string,
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    type?: string // to hide password 
}

function LabelledInp(props: LabelledInpType) {
    return <div>
        <div className="mb-3">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{props.value}</label>
            <input onChange={props.onChange} type={props.type || "text"} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={props.placeholder} required />
        </div>
    </div>
}