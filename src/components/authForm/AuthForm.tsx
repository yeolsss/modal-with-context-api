import { ComponentProps, ReactNode } from "react";

interface AuthFormProps extends ComponentProps<"form"> {
  children: ReactNode;
}

function AuthForm({ children, ...props }: AuthFormProps) {
  return (
    <form {...props}>
      <div className="flex flex-col py-2 gap-5">{children}</div>
    </form>
  );
}

export default AuthForm;
