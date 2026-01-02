import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomInputField from "../../../../components/common/CustomInputField";
const signUpTouristSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "Name must be at least 3 characters long" }),
    email: z.email({ message: "Invalid email address" }),
    phone: z
      .string()
      .min(10, { message: "Phone number must be at least 10 characters long" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" }),
    confirmPassword: z.string().min(8, {
      message: "Confirm password must be at least 8 characters long",
    }),
    policy: z.boolean().refine((value) => value, {
      message: "You must agree to the terms and conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
export default function SignUpTouristForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(signUpTouristSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      policy: false,
      confirmPassword: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleLogin = () => {
    navigate("/Login");
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <CustomInputField
        label="Name"
        id="name"
        placeholder="Enter your name"
        register={register("name")}
        error={errors.name}
      />

      <CustomInputField
        label="Email"
        id="email"
        type="email"
        placeholder="Enter your email"
        register={register("email")}
        error={errors.email}
      />

      <CustomInputField
        label="Phone Number"
        id="phone"
        type="tel"
        placeholder="Enter your phone number"
        register={register("phone")}
        error={errors.phone}
      />

      <CustomInputField
        label="Password"
        id="password"
        placeholder="***************"
        register={register("password")}
        error={errors.password}
        isPassword
      />

      <CustomInputField
        label="Confirm Password"
        id="confirmPassword"
        placeholder="***************"
        register={register("confirmPassword")}
        error={errors.confirmPassword}
        isPassword
      />

      <div className="flex flex-col mb-4">
        <div className="flex">
          <input type="checkbox" {...register("policy")} />

          <p className="pl-2 text-[14px]">
            I agree to all the{" "}
            <span className="text-[#FF8682] font-semibold">Terms</span> and{" "}
            <span className="text-[#FF8682] font-semibold">
              Privacy Policies
            </span>
          </p>
        </div>

        {errors.policy && (
          <p className="text-red-500 text-sm mt-1">{errors.policy.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-[#27A599] text-[#112211] w-full p-2.5 rounded-lg text-[24px] font-semibold  cursor-pointer hover:text-white transition-colors"
      >
        Create Account
      </button>

      <p className="text-center text-[14px]">
        Already have an account?{" "}
        <Link
          to={"/login"}
          className="text-[#B72618] font-semibold"
          onClick={handleLogin}
        >
          Login
        </Link>
      </p>
    </form>
  );
}
