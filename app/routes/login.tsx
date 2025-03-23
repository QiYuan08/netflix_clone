import ButtonPrimary from "~/component/ButtonPrimary";
import TextInput from "~/component/TextInput";

export default function login() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex min-w-2/5 flex-col gap-y-4 rounded-md bg-base-200 p-12 shadow-2xl">
        <h1 className="text-2xl font-semibold text-primary-content">Sign In</h1>
        <TextInput placeholder="Email" type="email" size="input-xl" />
        <TextInput placeholder="Password" type="password" size="input-xl" />

        <ButtonPrimary text="Sign In" style="btn-primary" />
        <div className="divider">OR</div>
        <ButtonPrimary text="Use a Sign-In Code" style="btn-primary" />

        <p>
          New to Netflix? <span className="font-semibold">Sign up now</span>
        </p>
      </div>
    </div>
  );
}
