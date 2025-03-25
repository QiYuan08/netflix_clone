import { SiNetflix } from "react-icons/si";
import { Link, Outlet } from "react-router";
import ButtonPrimary from "~/component/common/ButtonPrimary";

export default function customer() {

    return <div className="bg-primray">
        <div className="navbar-gradient fixed top-0 left-0 z-2 mb-3 flex min-h-20 w-full items-center justify-between p-2 px-5">
            <SiNetflix className="text-primary" size={40} />

            <Link to="/">
                <ButtonPrimary text="Sign In" rounded={true} style="btn-primary" />
            </Link>
        </div>

        <Outlet />
    </div>
}