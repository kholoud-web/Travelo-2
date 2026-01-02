import { AuthContainer } from "./components/AuthContainer";
import AuthHeader from "./components/AuthHeader";
import BackToLink from "./components/BackToLink";
import VerifyCodeForm from "./components/forms/VerifyCodeForm";
import { Logo } from "./components/Logo";
import SideImg from "./components/SideImg";

export default function VerifyPasswordCode() {
  return (
    <AuthContainer>
      <div className="flex justify-center gap-10 xl:gap-24 py-5 lg:py-16">
        <div className="flex flex-col gap-4 lg:gap-10 w-[520px] max-w-full">
          <div className="flex flex-col gap-[18px]">
            <Logo />
          </div>
          <div className="space-y-4">
            <BackToLink to={"/login"} title={"Back to login"} />
            <AuthHeader
              title="Verify code"
              subTitle="An authentication code has been sent to your email."
            />
            <VerifyCodeForm />
          </div>
        </div>
        <SideImg />
      </div>
    </AuthContainer>
  );
}
