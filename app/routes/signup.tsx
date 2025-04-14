import { useState } from "react";
import { SiNetflix } from "react-icons/si";
import { Form } from "react-router";
import ButtonPrimary from "~/component/common/ButtonPrimary";
import PasswordInput from "~/component/common/PasswordInput";
import TextInput from "~/component/common/TextInput";
import instance from "~/services/AxiosService";
import { BASE_URL, REGISTER_URL } from "~/url";
import type { Route } from "./+types/signup";

export default function signup() {
  const [data, setData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    userId: "",
    phoneNo: "",
    password: "",
  });

  const handleNext = async () => {
    console.log("here: ", BASE_URL + REGISTER_URL);
    try {
      let response = await instance.post(REGISTER_URL, data);

      console.log(response);
    } catch (error: any) {
      console.error(error);
    }
  };

  const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let fieldName = e.target.name;
    let fieldValue = e.target.value;

    setData((prevData) => ({
      ...prevData,
      [fieldName]: fieldValue,
    }));
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="xl:3/5 m-auto grid grid-cols-2 rounded-xl shadow-2xl shadow-primary-content md:w-5/6 lg:w-4/6">
        <div className={`flex`}>
          <div className="flex flex-col items-center gap-y-4 px-4 py-12">
            <SiNetflix className="text-primary" size={40} />

            <h2 className="text-3xl font-semibold">
              Create a password to start your membership
            </h2>

            <TextInput
              placeholder="User Id"
              type="text"
              name="userId"
              value={data.userId}
              onChange={handleDataChange}
            />

            <TextInput
              placeholder="First Name"
              type="text"
              name="firstName"
              value={data.firstName}
              onChange={handleDataChange}
            />

            <TextInput
              placeholder="Last Name"
              type="text"
              name="lastName"
              value={data.lastName}
              onChange={handleDataChange}
            />

            <TextInput
              placeholder="Email"
              type="email"
              name="email"
              value={data.email}
              onChange={handleDataChange}
            />

            <TextInput
              placeholder="Phone No"
              type="text"
              name="phoneNo"
              value={data.phoneNo}
              onChange={handleDataChange}
            />
            <PasswordInput
              name="password"
              value={data.password}
              onChange={handleDataChange}
            />

            <ButtonPrimary
              text="Next"
              style="btn-primary"
              className="w-3/5"
              // type="submit"
              onClick={() => handleNext()}
            />
          </div>
        </div>

        <div className="signup-dialog-bg"></div>
      </div>
    </div>
  );
}
