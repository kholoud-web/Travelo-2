import LoginImg from "/assets/images/forgetpassword.png";
import facebook from "/assets/images/facebook-icon.png";
import google from "/assets/images/google-icon.png";
import apple from "/assets/images/apple-icon.png";
import logo from "/assets/icons/GG.png";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate(); 

  const handleLogin = async (data) => {
  try {
    const res = await loginUser({
      email: data.email,
      password: data.password,
      rememberMe: true,
    });

    localStorage.setItem("token", res.data.token);
    navigate("/");
  } catch (err) {
    alert("Invalid email or password");
  }
};

  return (
    <section className="h-screen flex items-center justify-center main-font">
      <div className="w-[90%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Left Side */}
          <div className="py-20">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-10">
              <p className="text-4xl md:text-6xl logo-font">Travel</p>
              <img src={logo} className="w-[50px] h-[46px]" alt="logo" />
            </div>

            <h2 className="text-4xl font-bold text-[#112211] mb-2">
              Login
            </h2>
            <p className="text-[#737373] mb-8">
              Login to access your Globe account
            </p>

            {/* Account Type */}
            <div className="flex gap-4 mb-6">
              <button type="button" className="px-6 py-2 border rounded-md font-medium hover:bg-gray-100">
                Tourist
              </button>
              <button type="button" className="px-6 py-2 border rounded-md font-medium hover:bg-gray-100">
                Hotel
              </button>
            </div>

            {/* Form */}
            <form
              onSubmit={handleLogin}
              className="flex flex-col gap-4 md:w-[70%]"
            >
              <div>
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  placeholder="john.doe@gmail.com"
                  className="w-full p-2 border border-gray-400 rounded-md"
                />
              </div>

              <div>
                <label className="block mb-1">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full p-2 border border-gray-400 rounded-md"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  Remember me
                </label>

                <Link
                  to="/forget-password"
                  className="text-[#29bbac] hover:underline"
                >
                  Forgot Password
                </Link>
              </div>

              <button
                type="submit" 
                className="mt-4 p-2 text-lg font-medium rounded-md text-white bg-[#29bbac] hover:bg-[#22a39a]"
              >
                Login
              </button>
            </form>

            <p className="mt-6 text-sm">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-[#29bbac] font-medium">
                Sign up
              </Link>
            </p>

            {/* Social */}
            <div className="mt-8 md:w-[70%]">
              <p className="text-sm text-center text-[#737373] mb-4">
                Or login with
              </p>

              <div className="flex items-center justify-between">
                <img src={facebook} className="cursor-pointer" />
                <img src={google} className="cursor-pointer" />
                <img src={apple} className="cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="hidden md:block w-[616px] h-[816px] py-20">
            <img
              src={LoginImg}
              alt="Login Image"
              className="w-full h-full object-cover
              rounded-tl-[100px] rounded-tr-[30px]
              rounded-br-[100px] rounded-bl-[30px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
