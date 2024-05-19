import { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
}

function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="bg-black text-white text-xl px-5 py-2 rounded-md hover:bg-black/60"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
