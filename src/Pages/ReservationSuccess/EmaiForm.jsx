import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { FiMail, FiTrash2 } from "react-icons/fi";

const schema = z.object({
  emails: z.array(
    z.object({
      email: z.string().email("Invalid email address"),
    })
  ),
});

export default function EmailForm() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      emails: [{ email: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "emails",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {fields.map((field, index) => (
        <div key={field.id} className="flex flex-col">
          <label className="mb-2 font-medium text-[#454C58]">
            Email your itinerary to anyone
          </label>
          <div className="w-fit relative">
            <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-600 size-5" />
            <input
              type="email"
              {...register(`emails.${index}.email`)}
              className="p-4 pl-9 pr-10 border focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-[340px]  rounded-xl"
              placeholder="Enter email"
            />
            {index > 0 && (
              <button
                type="button"
                onClick={() => remove(index)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 hover:text-red-700 cursor-pointer border rounded-sm p-0.5"
              >
                <FiTrash2 />
              </button>
            )}
          </div>
          {errors.emails && errors.emails[index] && (
            <p className="text-red-500 text-sm mt-1">
              {errors.emails[index]?.email?.message}
            </p>
          )}
        </div>
      ))}

      <button
        type="button"
        onClick={() => append({ email: "" })}
        className="p-2 text-[#0057FF] cursor-pointer"
      >
        Add Another
      </button>

      <div className="flex flex-col sm:flex-row items-center gap-4  w-full max-w-[400px]">
        <button
          type="submit"
          className="px-4 py-2 bg-[#27A599] text-white rounded-xl w-full sm:w-[100px] h-12 hover:bg-[#1e7d71] transition-colors"
        >
          Share
        </button>
        <button
          type="button"
          className="px-4 py-2 text-lg bg-white text-[#2EC4B6] border border-[#2EC4B6] rounded w-full sm:w-[145px] h-12 cursor-pointer hover:bg-[#2EC4B6] hover:text-white transition-colors"
        >
          Open Invoice
        </button>
      </div>
    </form>
  );
}
