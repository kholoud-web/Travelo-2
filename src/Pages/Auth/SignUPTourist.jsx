import "../auth.css";
import AuthBreadCrumb from "./components/AuthBreadCrumb";
import { Logo } from "./components/Logo";

import { AuthContainer } from "./components/AuthContainer";
import SideImg from "./components/SideImg";
import SignUpTouristForm from "./components/forms/SignUpTouristForm";

export default function SignUPTourist() {
  return (
    <AuthContainer>
      <div className="flex justify-center gap-10 xl:gap-[200px]">
        <div className="flex flex-col gap-16 w-[400px] max-w-full">
          <div className="flex flex-col gap-[18px]">
            <Logo />
            <AuthBreadCrumb userType={"tourist"} />
          </div>
          <SignUpTouristForm />
        </div>
        <SideImg />
      </div>
    </AuthContainer>
  );
}
