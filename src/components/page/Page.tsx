import { PropsWithChildren } from "react";

function Page({ children }: PropsWithChildren) {
  return <div className="flex flex-col w-screen">{children}</div>;
}

export default Page;
