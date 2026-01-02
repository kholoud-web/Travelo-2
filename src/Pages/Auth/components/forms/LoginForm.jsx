import { Link } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomInputField from "../../../../components/common/CustomInputField";
import { useState } from "react";
import { SocialIcons } from "../SocialIconsBox";
import { OrLoginSeparator } from "../OrLoginSeparator";
const loginSchema = z.object({
  email: z.email({ message: "Invalid email address" }),
  userType: z.enum(["tourist", "hotel"], {
    message: "User type must be tourist or hotel",
  }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  rememberMe: z.boolean().optional(),
});
export default function LoginForm() {
  const [selectedUserType, setSelectedUserType] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      userType: "",
    },
  });

  const onSubmit = (data) => {
    console.log({ ...data });
  };

  const handleSelectUserType = (type) => {
    setSelectedUserType(type);
    setValue("userType", type);
  };
  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <div className="flex gap-5 sm:gap-12 max-sm:flex-col ">
          {["tourist", "hotel"].map((type) => (
            <button
              type="button"
              key={type}
              onClick={() => handleSelectUserType(type)}
              className={`p-[7px] rounded-lg border flex-1 capitalize flex items-center justify-center font-semibold transition-all
              ${
                selectedUserType === type
                  ? "bg-[#27A599] text-white border-[#27A599]"
                  : "bg-white text-[#112211] border-gray-300 hover:bg-[#e0f7f6]"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
        {errors.userType && (
          <p className="text-red-500 text-sm mt-1">{errors.userType.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-6 mb-10">
        <CustomInputField
          label="Email"
          id="email"
          type="email"
          placeholder="Enter your email"
          register={register("email")}
          error={errors.email}
        />

        <CustomInputField
          label="Password"
          id="password"
          placeholder="***************"
          register={register("password")}
          error={errors.password}
          isPassword
        />
      </div>

      <div className="flex justify-between mb-4">
        <div className="flex items-center gap-2">
          <input id="rememberMe" type="checkbox" {...register("rememberMe")} />
          <label htmlFor="rememberMe" className="text-[14px]">
            Remember me
          </label>
        </div>
        <Link to={"/forget-password"} className="capitalize text-[#FF8682]">
          forget password
        </Link>
      </div>

      <button className="bg-[#27A599] text-[#112211]  py-2 px-4 rounded-lg text-[24px] font-semibold  cursor-pointer hover:text-white transition-colors">
        Login
      </button>

      <p className="text-center text-[14px] mt-2">
        Don't have an account?{" "}
        <Link to={"/signup"} className="text-[#B72618] font-semibold">
          Sign Up
        </Link>
      </p>
      <OrLoginSeparator />
      <SocialIcons />
    </form>
  );
}
