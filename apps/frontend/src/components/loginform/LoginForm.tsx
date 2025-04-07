import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Title,
  Label,
  Input,
  Message,
  Button,
  Form,
  ContainerRight,
  BiggerContainer,
  ContainerLeft,
} from "./style";
import { useAuthActions } from "../../stores/useAuth";
import Logo from "../../assets/Portify-logo.png";

interface LoginFormInputs {
  username: string;
  password: string;
}

interface MessageType {
  type: "error" | "success";
  text: string;
}

export const LoginForm: React.FC = () => {
  const { login } = useAuthActions();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    const result = await login(data.username, data.password);

    if (result.success) {
      toast.success("Login bem-sucedido!");
    } else {
      toast.error(result.message || "Erro no login");
    }
  };

  return (
    <BiggerContainer>
      <ContainerLeft>
        <img src={Logo} alt="Logo" />
      </ContainerLeft>

      <ContainerRight>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Label>Usuário</Label>
            <Input
              type="text"
              placeholder="Digite seu usuario"
              {...register("username", { required: "Campo obrigatório" })}
            />
            {errors.username && (
              <Message type="error">{errors.username.message}</Message>
            )}
          </div>

          <div>
            <Label>Senha</Label>
            <Input
              type="password"
              placeholder="Digite sua senha"
              {...register("password", { required: "Campo obrigatório" })}
            />
            {errors.password && (
              <Message type="error">{errors.password.message}</Message>
            )}
          </div>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Entrando..." : "Entrar"}
          </Button>
        </Form>
      </ContainerRight>

      <ToastContainer position="top-right" theme="colored" autoClose={3000} />
    </BiggerContainer>
  );
};
