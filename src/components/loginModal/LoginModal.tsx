import Modal from "@/components/modal";
import Input from "@/components/input";
import Button from "@/components/button";
import AuthForm from "@/components/authForm";

function LoginModal() {
  return (
    <Modal title="로그인">
      <AuthForm onSubmit={(e) => e.preventDefault()}>
        <Input type="text" placeholder="Id를 입력하세요" />
        <Input type="password" placeholder="Password를 입력하세요" />
        <Button>로그인</Button>
      </AuthForm>
    </Modal>
  );
}

export default LoginModal;
