import { zodResolver } from "@hookform/resolvers/zod";
import BookingSummaryCard from "../SummaryCards/BookingSummaryCard";
import { z } from "zod";
import { useForm } from "react-hook-form";
import CustomInputField from "../../../../components/common/CustomInputField";
import visa from "/assets/images/visa-logo.png";
import DinersClub from "/assets/images/DinersClub.png";
import Mastercard from "/assets/images/Mastercard.png";
import GooglePay from "/assets/images/GooglePay.png";
import ApplePay from "/assets/images/ApplePay.png";
import Stripe from "/assets/images/Stripe.png";

const paymentMethods = [
  { img: visa },
  { img: DinersClub },
  { img: Mastercard },
  { img: GooglePay },
  { img: ApplePay },
  { img: Stripe },
];
const checkoutSchema = z.object({
  paymentOption: z.enum(["full", "partial", "installments"], {
    required_error: "Please choose a payment option",
  }),
  personalDetails: z.object({
    addressLine: z.string().min(1, "Address is required"),
    city: z.string().min(1, "City is required"),
    postalCode: z.string().min(1, "Postal code is required"),
    state: z.string().min(1, "State is required"),
  }),

  cardDetails: z.object({
    cardholderName: z.string().min(1, "Cardholder name is required"),
    cardNumber: z.string().min(1, "Card number is required"),
    expiry: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Invalid expiry date"),
    cvc: z.string().min(3, "CVC is required").max(4, "Invalid CVC"),
    saveCard: z.boolean().optional(),
  }),
});

export default function CompleteBookingStep() {
  // After final step redirect to payment success page
  return (
    <section className="flex gap-8 md:gap-5 lg:gap-16 xl:gap-[120px] max-lg:flex-col">
      <div className="flex-1 p-4">
        <CheckoutForm />
      </div>

      <BookingSummaryCard />
    </section>
  );
}

function CheckoutForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      paymentOption: "",
    },
  });

  const onSubmit = (data) => {
    console.log("FORM DATA:", data);
    // data.paymentOption
    // data.anythingElseLater
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
      <PaymentOptions register={register} error={errors.paymentOption} />
      <PersonalDetails register={register} errors={errors} />
      <PaymentMethodsBox />
      <CardDetailsSection register={register} errors={errors} />
      <button
        type="submit"
        className="px-4 py-2 rounded-xl bg-[#27A599] w-full text-xl text-white capitalize h-14 cursor-pointer"
      >
        Confirm and pay
      </button>
    </form>
  );
}

function PaymentOptions({ register, error }) {
  return (
    <div className="space-y-4">
      <SectionTitle title={"Choose when to pay"} />

      {/* Pay now */}
      <label
        className={`flex items-center max-sm:text-center max-sm:flex-col gap-1.5 rounded-lg  cursor-pointer`}
      >
        <input
          type="radio"
          value="full"
          {...register("paymentOption")}
          className="size-5"
        />
        <p className="font-medium text-[#454C58] text-lg">Pay $1,528 now</p>
      </label>
      <Separator />
      {/* Pay part now */}

      <label
        className={`flex items-center max-sm:text-center max-sm:flex-col gap-1.5 rounded-lg  cursor-pointer`}
      >
        <input
          type="radio"
          value="partial"
          {...register("paymentOption")}
          className="size-5"
        />
        <div>
          <p className="font-medium text-[#454C58] text-lg">
            Pay part now and part later
          </p>
          <p className="text-sm text-neutral-400">
            You will pay $500 now and $1,028 on August 10.
            <span className="capitalize">Learn more</span>
          </p>
        </div>
      </label>
      <Separator />
      {/* Installments */}
      <label
        className={`flex items-center max-sm:text-center max-sm:flex-col gap-1.5 rounded-lg  cursor-pointer`}
      >
        <input
          type="radio"
          value="installments"
          {...register("paymentOption")}
          className="size-5"
        />
        <div>
          <p className="font-medium text-[#454C58] text-lg">
            Pay in 3 installments with Klarna
          </p>
          <p className="text-sm text-neutral-400">
            Pay in 3 installments of $509.33 without interest.
            <span className="text-blue-600 ml-1 cursor-pointer">
              Learn more
            </span>
          </p>
        </div>
      </label>

      {error && <p className="text-sm text-red-500">{error.message}</p>}
      <Separator />
    </div>
  );
}
function PersonalDetails({ register, errors }) {
  return (
    <div>
      <SectionTitle title={"Complete registration payment"} />
      <div className="space-y-[18px]">
        <h4 className="text-xl font-semibold text-[#454C58]">
          Personal details
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CustomInputField
            label="Address line"
            placeholder="P.O.Box 1223"
            register={register("personalDetails.addressLine")}
            error={errors?.personalDetails?.addressLine}
          />

          <CustomInputField
            label="City"
            placeholder="Arusha"
            register={register("personalDetails.city")}
            error={errors?.personalDetails?.city}
          />

          <CustomInputField
            label="Postal code"
            placeholder="9090"
            register={register("personalDetails.postalCode")}
            error={errors?.personalDetails?.postalCode}
          />

          <CustomInputField
            label="State"
            placeholder="Arusha, Tanzania"
            register={register("personalDetails.state")}
            error={errors?.personalDetails?.state}
          />
        </div>
      </div>
    </div>
  );
}

function PaymentMethodsBox() {
  return (
    <div className="flex flex-col">
      <SectionTitle title={"Payment methods"} />
      <div className="flex flex-wrap items-center gap-2 sm:gap-5">
        {paymentMethods.map((method) => (
          <div className="rounded-md border h-12 flex items-center justify-center w-[70px]">
            <img src={method.img} />
          </div>
        ))}
      </div>
    </div>
  );
}

function CardDetailsSection({ register, errors }) {
  return (
    <div className="">
      <SectionTitle title={"Card details"} />
      <div className="space-y-4">
        <CustomInputField
          label="Cardholder's name"
          placeholder="Seen on your card"
          register={register("cardDetails.cardholderName")}
          error={errors?.cardDetails?.cardholderName}
        />

        <CustomInputField
          label="Card number"
          placeholder="Seen on your card"
          register={register("cardDetails.cardNumber")}
          error={errors?.cardDetails?.cardNumber}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CustomInputField
            label="Expiry"
            placeholder="MM/YY"
            register={register("cardDetails.expiry")}
            error={errors?.cardDetails?.expiry}
          />

          <CustomInputField
            label="CVC"
            placeholder="CVC"
            register={register("cardDetails.cvc")}
            error={errors?.cardDetails?.cvc}
          />
        </div>

        <label className="flex items-center gap-2 text-base text-neutral-800 font-medium w-fit">
          <input
            type="checkbox"
            {...register("cardDetails.saveCard")}
            className="size-5 rounded border-[#0057FF]"
          />
          Save Card
        </label>
      </div>
    </div>
  );
}
function SectionTitle({ title }) {
  return (
    <h2 className="text-[28px] font-semibold text-[#454C58] mb-6">{title}</h2>
  );
}

function Separator() {
  return <div className="h-[0.2px] w-full bg-[#DDDFE3] my-6" />;
}
