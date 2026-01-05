import ForgetImg from "/assets/images/forgetpassword.png";
import facebook from "/assets/images/facebook-icon.png";
import google from "/assets/images/google-icon.png";
import apple from "/assets/images/apple-icon.png";
import logo from "/assets/icons/GG.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { resetPassword } from "../../../../api/authApi";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await resetPassword({
        email: localStorage.getItem("resetEmail"),
        verificationCode: localStorage.getItem("verificationCode"),
        newPassword: password,
      });

      localStorage.removeItem("resetEmail");
      localStorage.removeItem("verificationCode");

      navigate("/login");
    } catch (error) {
      alert("Failed to reset password");
    }
  };

  return (
    <section className="h-screen flex items-center justify-center main-font">
      <div className="w-[90%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* left side */}
          <div className="py-20">
            <div className="flex items-center gap-2">
              <p className="text-4xl md:text-6xl logo-font">Travel</p>
              <img className="w-[50px] h-[46px]" src={logo} />
            </div>

            <div>
              <h2 className="text-4xl font-bold mt-10">Set a password</h2>
              <p className="w-[70%] py-5 text-[#737373]">
                Your previous password has been reset. Please set a new password
                for your account.
              </p>
            </div>

            <form className="flex flex-col gap-2.5" onSubmit={handleSubmit}>
              <label htmlFor="password">Create New Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter new password"
                className="p-2 md:w-[70%] border border-gray-400 rounded-md"
              />

              <label htmlFor="Newpassword">Confirm New Password</label>
              <input
                type="password"
                id="Newpassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
                className="p-2 md:w-[70%] border border-gray-400 rounded-md"
              />

              <button
                type="submit"
                className="md:text-2xl font-medium p-2 rounded-md md:w-[70%] text-[#112211] bg-teal-500 hover:bg-teal-600 my-5"
              >
                Submit
              </button>
            </form>

            <div className="md:w-[70%] mx-auto">
              <p className="text-sm font-bold text-[#737373]">
                Send Verify code to your Email
              </p>
              <span className="text-sm text-[#737373] text-center pl-12">
                Or login with
              </span>
            </div>

            <div className="md:w-[70%] flex items-center justify-between">
              <img src={facebook} alt="facebook icon" className="cursor-pointer" />
              <img src={google} alt="google icon" className="cursor-pointer" />
              <img src={apple} alt="apple icon" className="cursor-pointer" />
            </div>
          </div>

          {/* Right side */}
          <div className="hidden md:block w-[616px] h-[816px] py-20">
            <img
              src={ForgetImg}
              alt="forgetpassword Image"
              className="w-full h-full object-cover rounded-tl-[100px] rounded-tr-[30px] rounded-br-[100px] rounded-bl-[30px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
