import Modal from "@/components/modal";
import Input from "@/components/input";
import Button from "@/components/button";

function LoginModal() {
  return (
    <Modal>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col py-2 gap-2">
          <Input type="text" placeholder="Id를 입력하세요" />
          <Input type="password" placeholder="Password를 입력하세요" />
          <Button>로그인</Button>
        </div>
      </form>
    </Modal>
  );
}

export default LoginModal;
