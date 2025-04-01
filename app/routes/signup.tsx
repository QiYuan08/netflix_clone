import { useState } from "react";
import ButtonPrimary from "~/component/common/ButtonPrimary";
import PasswordInput from "~/component/common/PasswordInput";
import TextInput from "~/component/common/TextInput";
import BgImg from "~/assets/home_bg.jpg";
import Select from "~/component/common/Select";

export default function signup() {
  const [data, setData] = useState({
    email: "",
    phoneNo: "",
    password: "",
  });

  const handleNext = () => {
    console.log(data);
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
    <div className="signup-bg flex size-full">
      <div
        className={`m-auto flex h-3/5 w-2/5 rounded-xl bg-base-200 shadow-2xl shadow-primary-content`}
      >
        <div className="flex flex-col items-center gap-y-4 px-4 py-12">
          <h2 className="text-3xl font-semibold">
            Create a password to start your membership
          </h2>

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
            onClick={() => handleNext()}
          />
        </div>
      </div>
    </div>
  );
}
