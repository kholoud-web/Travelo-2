import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomInputField from "../../../../components/common/CustomInputField";

import { SocialIcons } from "../SocialIconsBox";
import { OrLoginSeparator } from "../OrLoginSeparator";
const forgetPasswordSchema = z.object({
  email: z.email({ message: "Invalid email address" }),
});
export default function ForgetPasswordForm() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(forgetPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data) => {
    console.log({ ...data });
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-10">
        <CustomInputField
          label="Email"
          id="email"
          type="email"
          placeholder="Enter your email"
          register={register("email")}
          error={errors.email}
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
