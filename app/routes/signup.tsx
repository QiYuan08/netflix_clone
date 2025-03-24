import ButtonPrimary from "~/component/common/ButtonPrimary";
import TextInput from "~/component/common/TextInput";

export default function signup() {
  return (
    <div className="flex size-full items-center justify-center">
      <div className="flex flex-col gap-y-2">
        <h2 className="text-3xl font-semibold">
          Create a password to start your membership
        </h2>

        <TextInput placeholder="Email" type="email" value={"email"} />
        <TextInput placeholder="Email" type="password" value={"password"} />

        <ButtonPrimary text="Next" style="btn-primary" />
      </div>
    </div>
  );
}
