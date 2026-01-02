import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomInputField from "../../../../components/common/CustomInputField";

import { SocialIcons } from "../SocialIconsBox";
import { OrLoginSeparator } from "../OrLoginSeparator";
const resetPasswordSchema = z
  .object({
    newPassword: z.string().min(8, "Password must be at least 8 characters"),
    confirmNewPassword: z
      .string()
      .min(8, "Password must be at least 8 characters"),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords do not match",
    path: ["confirmNewPassword"],
  });
export default function ResetPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  const onSubmit = (data) => {
    console.log({ ...data });
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-10">
        <CustomInputField
          label="New Password"
          id="newPassword"
          type="password"
          placeholder="Enter new password"
          register={register("newPassword")}
          error={errors.newPassword}
          isPassword
        />

        <CustomInputField
          label="Confirm New Password"
          id="confirmNewPassword"
          type="password"
          placeholder="Confirm new password"
          register={register("confirmNewPassword")}
          error={errors.confirmNewPassword}
          isPassword
        />
        <button className="bg-[#27A599] text-[#112211]  py-2 px-4 rounded-lg text-[24px] font-semibold  cursor-pointer hover:text-white transition-colors">
          Submit
        </button>
      </div>

      <p className="text-center text-[14px] mt-4 font-medium capitalize">
        send verify code to your email
      </p>
      <OrLoginSeparator />
      <SocialIcons />
    </form>
  );
}
