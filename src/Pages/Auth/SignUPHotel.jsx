import AuthBreadCrumb from "./components/AuthBreadCrumb";
import { AuthContainer } from "./components/AuthContainer";
import SignUpHotelForm from "./components/forms/SignupHotelForm";

import { Logo } from "./components/Logo";
import SideImg from "./components/SideImg";

export default function SignUPHotel() {
  return (
    <AuthContainer>
      <div className="flex justify-center gap-10 xl:gap-[200px] py-5 lg:py-16">
        <div className="flex flex-col gap-8 lg:gap-16 w-[400px] max-w-full">
          <div className="flex flex-col gap-[18px]">
            <Logo />
            <AuthBreadCrumb userType={"hotel"} />
          </div>
          <SignUpHotelForm />
        </div>
        <SideImg />
      </div>
    </AuthContainer>
  );
}
