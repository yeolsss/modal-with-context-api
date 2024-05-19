import { PropsWithChildren } from "react";
import { useModalContext } from "@/context/modalContext";

interface ModalProps {
  title: string;
}

function Modal({ children, title }: PropsWithChildren<ModalProps>) {
  const { close, backdropClosable } = useModalContext();

  const handleBackDropClick = () => {
    if (backdropClosable) close();
  };

  return (
    <div
      className="fixed flex top-0 left-0 bg-black/50 w-screen h-screen backdrop-blur-sm"
      onClick={handleBackDropClick}
    >
      <section
        className="relative m-auto bg-white px-10 py-5 rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="py-2 text-2xl font-bold">{title}</h1>
        {children}

        <button
          className="absolute top-2 right-3 hover:bg-black/50 hover:text-white px-2 rounded-full"
          onClick={close}
        >
          X
        </button>
      </section>
    </div>
  );
}

export default Modal;
