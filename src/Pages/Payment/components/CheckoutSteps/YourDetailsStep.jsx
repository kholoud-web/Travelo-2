import { useFieldArray, useForm } from "react-hook-form";
import PaymentSummaryCard from "../SummaryCards/BookingSummaryCard";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomInputField from "../../../../components/common/CustomInputField";
import { MinusCircle, PlusCircle } from "lucide-react";
import { useState } from "react";
import NextStepBtn from "../common/NextStepBtn.jsx";
const guestSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.email("Invalid email"),
  phone: z.string().min(1, "Phone is required"),
});
const yourDetailsSchema = z.object({
  guests: z
    .array(guestSchema)
    .min(1)
    .superRefine((guests, ctx) => {
      const firstGuest = guests[0];

      if (!firstGuest?.email) {
        ctx.addIssue({
          path: [0, "email"],
          message: "Email is required",
        });
      }

      if (!firstGuest?.phone) {
        ctx.addIssue({
          path: [0, "phone"],
          message: "Phone number is required",
        });
      }
    }),

  specialRequests: z.string().optional(),
  travelInsurance: z.boolean().optional(),
  contactPhone: z
    .string({ error: "phone number is required" })
    .min(8, "Phone number is required"),
});

export default function YourDetailsStep() {
  return (
    <section className="flex gap-8 md:gap-5 lg:gap-16 xl:gap-[120px] max-lg:flex-col ">
      <div className="flex-1 p-4">
        <YourDetailsForm />
      </div>
      <PaymentSummaryCard />
    </section>
  );
}

function YourDetailsForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(yourDetailsSchema),
    defaultValues: {
      guests: [{ firstName: "", lastName: "", email: "", phone: "" }],
      specialRequests: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "guests",
  });

  const onSubmit = (data) => {
    console.log("FORM DATA 👉", data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BookingDetailsBox />
      <Separator />

      <GuestInfoBox
        fields={fields}
        append={append}
        errors={errors}
        register={register}
        remove={remove}
      />
      <Separator />
      <SpecialRequestsBox
        placeholder={
          "Let the property know if there's anything they can assist you with."
        }
        register={register(`specialRequests`)}
      />
      <Separator />
      <TravelRequirements errors={errors} register={register} />
      <NextStepBtn />
    </form>
  );
}

function BookingDetailsBox() {
  return (
    <div className="flex flex-col gap-4 pr-4">
      <SectionHeader title={"Booking details"} />
      <div className="flex flex-col gap-4">
        <span className="text-[#454C58] text-xl font-medium">Your trip</span>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-[#454C58] font-medium">Dates</span>
            <span className="text-neutral-400">Jul 10-14</span>
          </div>
          <button className="underline text-[#2B3037]">Edit</button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-[#454C58] font-medium">Guests</span>
            <span className="text-neutral-400">1 guest</span>
          </div>
          <button className="underline text-[#2B3037]">Edit</button>
        </div>
      </div>
    </div>
  );
}
function GuestInfoBox({ fields, register, errors, append, remove }) {
  return (
    <div className="flex flex-col gap-6">
      <SectionHeader
        title="Guest info"
        subTitle="Guest names must match the valid ID which will be used at check-in."
      />
      <div className="flex flex-col gap-6">
        {fields.map((field, index) => (
          <GuestFields
            key={field.id}
            index={index}
            register={register}
            errors={errors}
            append={append}
            isRemovable={index !== 0}
            onRemove={() => remove(index)}
          />
        ))}
      </div>
    </div>
  );
}

function SpecialRequestsBox({ placeholder, register }) {
  return (
    <div className="flex flex-col gap-[18px]">
      <SectionHeader
        title="Special Requests"
        subTitle="The property will do its best, but cannot guarantee to fulfil all requests"
        isOptional
      />

      <textarea
        placeholder={placeholder}
        className="border border-neutral-100 rounded-xl p-2  bg-white! h-[147px] px-4 py-3 w-full"
        {...register}
      />
    </div>
  );
}

function TravelRequirements({ register, errors }) {
  const [showPhone, setShowPhone] = useState(false);
  return (
    <div>
      {/* Travel Insurance */}
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-4">
          <h3 className="text-[#454C58] font-medium text-xl">
            Add travel insurance?
          </h3>
          <div>
            <p className="text-base text-neutral-400">Yes, add for 100$</p>
            <p className="text-base text-neutral-400">
              Only available when booking
            </p>
          </div>
        </div>
        <label className="self-end items-center">
          <input
            type="checkbox"
            {...register("travelInsurance")}
            className="hidden peer"
          />
          <span className="px-4 py-[5px] rounded-full border border-neutral-100 text-sm font-medium cursor-pointer peer-checked:bg-black peer-checked:text-white">
            Add
          </span>
        </label>
      </div>
      <div className="h-0.5 bg-neutral-100 my-[18px]" />
      {/* Required Phone Number */}
      <div>
        <div className="flex justify-between gap-4">
          <div className="flex flex-col gap-4">
            <h3 className="text-[#454C58] font-medium text-xl">
              Required for your trip
            </h3>
            <div>
              <p className="text-sm font-medium">Phone number</p>
              <p className="text-xs text-gray-400">
                Add and confirm your phone number to get trip update
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowPhone(true)}
            className="px-4 py-[5px] rounded-full border border-neutral-100 text-sm font-medium cursor-pointer self-end"
          >
            Add
          </button>
        </div>

        {showPhone && (
          <div className="mt-4">
            <input
              type="tel"
              placeholder="Enter your phone number"
              {...register("contactPhone", {
                required: "Phone number is required",
              })}
              className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black ${
                errors.contactPhone ? "border-red-500" : "border-gray-300"
              }`}
            />
          </div>
        )}
        {errors.contactPhone && (
          <p className="text-red-500 text-xs mt-1">
            {errors.contactPhone.message}
          </p>
        )}
      </div>
      <div className="h-0.5 bg-neutral-100 my-[18px]" />
      {/* Cancellation Policy */}
      <div>
        <h3 className="text-[#454C58] font-medium text-xl mb-4">
          Cancellation policy
        </h3>
        <div className="flex flex-col">
          <p className="text-sm text-gray-700">
            <strong>Free cancellation before Aug 1.</strong> cancel before
            check-in on Jul 10 for a partial refund.
          </p>
          <a href="#" className="text-blue-600 text-sm mt-1 inline-block">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}

function GuestFields({
  index,
  register,
  errors,
  onRemove,
  append,
  isRemovable,
}) {
  return (
    <div>
      <div className="flex justify-between items-center flex-wrap gap-3 mb-[18px]">
        <span className="text-xl font-medium">Guest {index + 1}</span>

        {!isRemovable && (
          <button
            type="button"
            onClick={() => append({ firstName: "", lastName: "" })}
            className="flex items-center gap-2  text-sm font-medium text-neutral-700 cursor-pointer"
          >
            <PlusCircle className="text-[#0057FF] size-5" /> Add New Guest
            (Optional)
          </button>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex lg:items-center max-lg:flex-col gap-4">
          <div className="flex-1">
            <CustomInputField
              label="First name"
              placeholder="First name"
              register={register(`guests.${index}.firstName`)}
              error={errors?.guests?.[index]?.firstName}
            />
          </div>
          <div className="flex items-center gap-2 flex-1">
            <div className="flex-1">
              <CustomInputField
                label="Last name"
                placeholder="Last name"
                register={register(`guests.${index}.lastName`)}
                error={errors?.guests?.[index]?.lastName}
              />
            </div>
            {isRemovable && (
              <button
                type="button"
                onClick={onRemove}
                className="text-red-500 self-center cursor-pointer"
              >
                <MinusCircle className="text-[#0057FF] size-5" />
              </button>
            )}
          </div>
        </div>
        {index === 0 && (
          <div className="flex max-lg:flex-col gap-4">
            <div className="flex-1">
              <CustomInputField
                label="Email"
                type="email"
                placeholder="Enter your email"
                register={register(`guests.${index}.email`)}
                error={errors?.guests?.[index]?.email}
              />
            </div>
            <div className="flex-1">
              <CustomInputField
                label="Phone"
                placeholder="Phone number"
                register={register(`guests.${index}.phone`)}
                error={errors?.guests?.[index]?.phone}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Separator() {
  return <div className="h-[0.2px] w-full bg-[#DDDFE3] my-10" />;
}
function SectionHeader({ title, subTitle, isOptional = false }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <h3 className="text-[28px] font-semibold text-[#454C58]">{title}</h3>
        {isOptional && <span className=" text-neutral-300">(optional)</span>}
      </div>
      {subTitle && <span className="text-neutral-300">{subTitle}</span>}
    </div>
  );
}
