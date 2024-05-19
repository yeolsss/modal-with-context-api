import { PropsWithChildren } from "react";
import { useModalContext } from "@/context/modalContext";

function Modal({ children }: PropsWithChildren) {
  const { close } = useModalContext();
  return (
    <div
      className="fixed flex top-0 left-0 bg-black/50 w-screen h-screen backdrop-blur-sm"
      onClick={close}
    >
      <section
        className="m-auto bg-white px-10 py-5 rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </section>
    </div>
  );
}

export default Modal;
