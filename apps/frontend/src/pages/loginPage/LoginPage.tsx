import React from "react";
import { LoginForm } from "../../components/loginform/LoginForm.tsx";
import { PageWrapper } from "./style.js";

const LoginPage: React.FC = () => {
  return (
    <PageWrapper>
      <LoginForm />
    </PageWrapper>
  );
};

export default LoginPage;
