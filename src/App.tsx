import HomePage from "@/pages/homePage/HomePage.tsx";
import { ModalContextProvider } from "@/context/modalContext";

function App() {
  return (
    <ModalContextProvider>
      <HomePage />
    </ModalContextProvider>
  );
}

export default App;
