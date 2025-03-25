import { useState } from "react";
import ButtonPrimary from "~/component/common/ButtonPrimary";
import PasswordInput from "~/component/common/PasswordInput";
import TextInput from "~/component/common/TextInput";

export default function signup() {
  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const handleNext = () => {
    console.log(data)
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
    <div className="flex size-full max-w-lg m-auto ">
      <div className="flex flex-col gap-y-2 items-center justify-center">
        <h2 className="text-3xl font-semibold">
          Create a password to start your membership
        </h2>

        <TextInput placeholder="email" type="email" name="email" value={data.email} onChange={(e) => handleDataChange(e)} />
        <PasswordInput name="password" value={data.password} onChange={(e) => handleDataChange(e)} />

        <ButtonPrimary text="Next" style="btn-primary" className="w-3/5" onClick={() => handleNext()} />
      </div>
    </div>
  );
}
