import Modal from "@/components/modal";
import AuthForm from "@/components/authForm";
import Input from "@/components/input";
import Button from "@/components/button";

function SignUpModal() {
  return (
    <Modal title="회원가입">
      <AuthForm onSubmit={(e) => e.preventDefault()}>
        <Input type="text" placeholder="Id를 입력하세요" />
        <Input type="password" placeholder="Password를 입력하세요" />
        <Input type="password" placeholder="Password를 다시 입력하세요" />
        <Button>회원가입</Button>
      </AuthForm>
    </Modal>
  );
}

export default SignUpModal;
