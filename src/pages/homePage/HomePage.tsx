import Page from "@/components/page";
import Button from "@/components/button";
import { useModalContext } from "@/context/modalContext";
import LoginModal from "@/components/loginModal";

function HomePage() {
  const modal = useModalContext();

  return (
    <Page>
      <h1 className="text-center text-4xl font-bold my-10">
        Modal With ContextAPI
      </h1>

      <div className="flex flex-col gap-10 mx-auto">
        <Button onClick={() => modal.open(<LoginModal />)}>Login Modal</Button>
      </div>
    </Page>
  );
}

export default HomePage;
