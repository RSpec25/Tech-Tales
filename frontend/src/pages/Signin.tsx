import { Qoute } from "../components/Qoute"
import { Auth } from "../components/Auth"

export const Signin = () => {
    return <div className="grid grid-cols-2">
        <Auth type="signin" />
        <div className="hidden lg:block">
            <Qoute />
        </div>
    </div >
}