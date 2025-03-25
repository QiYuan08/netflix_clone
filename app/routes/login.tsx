import { useState } from "react";
import { Link, useNavigate } from "react-router";
import ButtonPrimary from "~/component/common/ButtonPrimary";
import TextInput from "~/component/common/TextInput";

interface DataProps {
  email: string,
  password: string
}

export default function login() {
  const navigate = useNavigate();

  const [data, setData] = useState<DataProps>({
    email: "",
    password: ""
  })

  const handleNext = () => {
    navigate("/dashboard");
  }

  const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let fieldName = e.target.name;
    let fieldValue = e.target.value;

    setData((prevData) => ({
      ...prevData,
      [fieldName]: fieldValue
    }));

  }

  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex min-w-2/5 flex-col gap-y-4 rounded-md bg-base-200 p-12 shadow-2xl">
        <h1 className="text-2xl font-semibold text-primary-content">Sign In</h1>
        <TextInput
          placeholder="Email"
          type="email"
          size="input-xl"
          value={data.email}
        />
        <TextInput
          placeholder="Password"
          type="password"
          size="input-xl"
          value={data.password}
        />

        <ButtonPrimary text="Sign In" style="btn-primary" onClick={() => handleNext()} />
        <div className="divider">OR</div>
        <Link to={"/signup"} className="btn btn-primary rounded-3xl">
          Use a Sign-In Code
        </Link>

        <p>
          New to Netflix? <span className="font-semibold">Sign up now</span>
        </p>
      </div>
    </div>
  );
}
