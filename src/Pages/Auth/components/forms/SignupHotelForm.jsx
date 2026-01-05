import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomInputField from "../../../../components/common/CustomInputField";
import { z } from "zod";
import { registerHotel } from "../../../../api/authApi";

const signUpHotelSchema = z
  .object({
    hotelName: z
      .string()
      .min(3, { message: "Hotel name must be at least 3 characters long" }),
    fullAddress: z
      .string()
      .min(5, { message: "Full address must be at least 5 characters long" }),
    responsibleName: z.string().min(3, {
      message: "Responsible person's name must be at least 3 characters long",
    }),
    phone: z
      .string()
      .min(10, { message: "Phone number must be at least 10 characters long" }),
    country: z.string().min(2, { message: "Country is required" }),
    adminEmail: z.email({ message: "Invalid email address" }),
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

export default function SignUpHotelForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(signUpHotelSchema),
    defaultValues: {
      hotelName: "",
      fullAddress: "",
      responsibleName: "",
      phone: "",
      country: "",
      adminEmail: "",
      password: "",
      confirmPassword: "",
      policy: false,
    },
  });

  const onSubmit = async (data) => {
  try {
    await registerHotel({
      hotelId: 0,
      hotelName: data.hotelName,
      fullHotelAddress: data.address,
      responsiblePersonName: data.manager,
      phoneNumber: data.phone,
      country: data.country,
      adminEmail: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    });

    navigate("/login");
  } catch (err) {
    console.log(err.response?.data);
  }
};

  const handleLogin = () => {
    navigate("/Login");
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <CustomInputField
        label="Hotel Name"
        id="hotelName"
        placeholder="Enter hotel name"
        register={register("hotelName")}
        error={errors.hotelName?.message}
      />

      <CustomInputField
        label="Full Address"
        id="fullAddress"
        placeholder="Enter full hotel address"
        register={register("fullAddress")}
        error={errors.fullAddress?.message}
      />

      <CustomInputField
        label="Responsible Person's Name"
        id="responsibleName"
        placeholder="Enter responsible person's name"
        register={register("responsibleName")}
        error={errors.responsibleName?.message}
      />

      <CustomInputField
        label="Phone Number"
        id="phone"
        type="tel"
        placeholder="Enter phone number"
        register={register("phone")}
        error={errors.phone?.message}
      />

      <CustomInputField
        label="Country"
        id="country"
        placeholder="Enter country"
        register={register("country")}
        error={errors.country?.message}
      />

      <CustomInputField
        label="Administrative Email"
        id="adminEmail"
        type="email"
        placeholder="Enter administrative email"
        register={register("adminEmail")}
        error={errors.adminEmail?.message}
      />

      <CustomInputField
        label="Password"
        id="password"
        placeholder="***************"
        register={register("password")}
        error={errors.password?.message}
        isPassword
      />

      <CustomInputField
        label="Confirm Password"
        id="confirmPassword"
        placeholder="***************"
        register={register("confirmPassword")}
        error={errors.confirmPassword?.message}
        isPassword
      />

      <div className="flex flex-col mb-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            {...register("policy", { setValueAs: (v) => !!v })}
          />
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
