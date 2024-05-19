import { ComponentProps } from "react";

function Input({ ...props }: ComponentProps<"input">) {
  return (
    <input
      {...props}
      className="border border-black px-2 py-1 rounded-md focus:border-black/70"
    />
  );
}

export default Input;
