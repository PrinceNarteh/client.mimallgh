"use client";

import { useForm } from "react-hook-form";

export const ErrorMessage = (field: { field: string }) => {
  const {
    formState: { errors },
  } = useForm();

  return (
    <div>
      {errors[`${field}`] && (
        <span className="block text-[12px] pl-1 pt-1 text-[red]">
          {`${errors[`${field}`]?.message}`}
        </span>
      )}
    </div>
  );
};
