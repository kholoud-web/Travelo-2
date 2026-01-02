import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomInputField from "../../../../components/common/CustomInputField";

import { SocialIcons } from "../SocialIconsBox";
import { OrLoginSeparator } from "../OrLoginSeparator";
import { Link } from "react-router-dom";
const verifyCodeSchema = z.object({
  verifyCode: z.string({ message: "Please enter verification code" }),
});
export default function VerifyCodeForm() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(verifyCodeSchema),
    defaultValues: {
      verifyCode: "",
    },
  });

  const onSubmit = (data) => {
    console.log({ ...data });
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-10">
        <CustomInputField
          label="VerifyCode"
          id="VerifyCode"
          type="password"
          isPassword
          placeholder="Enter your verification code"
          register={register("verifyCode")}
          error={errors.verifyCode}
        />
        <div className="flex flex-col gap-4">
          <p className="text-[#112211] font-medium">
            Didn’t receive a code?{" "}
            <Link className="text-[#FF8682]" to={"/forget-password"}>
              Resend
            </Link>
          </p>
          <button className="w-full bg-[#27A599] text-[#112211]  py-2 px-4 rounded-lg text-[24px] font-semibold  cursor-pointer hover:text-white transition-colors">
            Verify
          </button>
        </div>
      </div>
      <OrLoginSeparator />
      <SocialIcons />
    </form>
  );
}
