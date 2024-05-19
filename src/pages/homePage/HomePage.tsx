import Page from "@/components/page";
import Button from "@/components/button";
import { useModalContext } from "@/context/modalContext";
import { lazy, Suspense } from "react";

const LoginModal = lazy(() => import("@/components/loginModal"));
const SignUpModal = lazy(() => import("@/components/signUpModal"));

function HomePage() {
  const modal = useModalContext();

  return (
    <Page>
      <h1 className="text-center text-4xl font-bold my-10">
        Modal With ContextAPI
      </h1>

      <div className="flex flex-col gap-10 mx-auto">
        <Button
          onClick={() =>
            modal.open(
              <Suspense fallback={null}>
                <LoginModal />
              </Suspense>,
              false,
            )
          }
        >
          Login Modal
        </Button>
        <Button
          onClick={() =>
            modal.open(
              <Suspense fallback={null}>
                <SignUpModal />
              </Suspense>,
            )
          }
        >
          Signup Modal
        </Button>
      </div>
    </Page>
  );
}

export default HomePage;
