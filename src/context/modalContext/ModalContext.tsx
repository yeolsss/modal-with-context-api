import {
  createContext,
  PropsWithChildren,
  ReactElement,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

interface ModalContextValue {
  open: (modalElement: ReactElement) => void;
  close: () => void;
}

const initialModalContext: ModalContextValue = {
  open: () => {},
  close: () => {},
};

const ModalContext = createContext<ModalContextValue>(initialModalContext);

export const useModalContext = () => useContext(ModalContext);

export const ModalContextProvider = ({ children }: PropsWithChildren) => {
  const [modal, setModal] = useState<ReactElement | null>(null);

  const open: ModalContextValue["open"] = useCallback(
    (modalElement: ReactElement) => {
      setModal(modalElement);
    },
    [],
  );

  const close: ModalContextValue["close"] = useCallback(() => {
    setModal(null);
  }, []);

  const value: ModalContextValue = useMemo(
    () => ({ open, close }),
    [close, open],
  );

  return (
    <ModalContext.Provider value={value}>
      {children}
      {modal}
    </ModalContext.Provider>
  );
};
