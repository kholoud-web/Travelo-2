import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, Link } from "react-router-dom";

import CustomInputField from "../../../../components/common/CustomInputField";
import { SocialIcons } from "../SocialIconsBox";
import { OrLoginSeparator } from "../OrLoginSeparator";
import { verifyCode } from "../../../../api/authApi";

// ✅ Schema
const verifyCodeSchema = z.object({
  verifyCode: z.string().min(4, "Please enter verification code"),
});

export default function VerifyCodeForm() {
  const navigate = useNavigate();

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

  const onSubmit = async (data) => {
    try {
      const email = localStorage.getItem("resetEmail");

      await verifyCode({
        email,
        code: data.verifyCode, // ✅ التصحيح المهم
      });

      // نخزّن الكود للمرحلة الجاية
      localStorage.setItem("verificationCode", data.verifyCode);

      navigate("/reset-password");
    } catch (error) {
      alert("Invalid verification code");
    }
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-10">
        <CustomInputField
          label="Verification Code"
          id="verifyCode"
          type="text"
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

          <button className="w-full bg-[#27A599] text-[#112211] py-2 px-4 rounded-lg text-[24px] font-semibold">
            Verify
          </button>
        </div>
      </div>

      <OrLoginSeparator />
      <SocialIcons />
    </form>
  );
}
