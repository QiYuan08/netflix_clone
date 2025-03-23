import { Link, Outlet } from "react-router";
import { SiNetflix } from "react-icons/si";
import ButtonPrimary from "~/component/ButtonPrimary";

export default function guest() {
  return (
    <div>
      <div className="flex flex-col gap-y-2">
        <div className="mb-3 flex min-h-20 items-center justify-between bg-neutral bg-gradient-to-b p-2 px-5">
          <SiNetflix className="text-primary" size={40} />

          <Link to="/login">
            <ButtonPrimary text="Sign In" rounded={true} color="btn-primary" />
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
