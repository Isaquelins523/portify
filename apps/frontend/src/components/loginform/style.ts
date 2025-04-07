import styled from "styled-components";

export const ContainerRight = styled.div`
  max-width: 400px;

  overflow: hidden;
  margin: 5rem auto;
  padding: 2rem;
  gap: 1rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.3rem;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  padding: 0.6rem;
`;

export const Input = styled.input`
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
`;

export const Button = styled.button`
  background-color: #4682b4;
  color: white;
  font-weight: bold;
  padding: 0.75rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  width: 25vw;

  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background-color: #4338ca;
  }

  &:disabled {
    background-color: #a5b4fc;
    cursor: not-allowed;
  }
`;

interface MessageProps {
  type: "success" | "error";
}

export const Message = styled.p<MessageProps>`
  text-align: center;
  margin-top: auto;
  font-weight: bold;
  font-size: 1rem;
  color: ${({ type }) => (type === "success" ? "green" : "red")};
`;

export const ContainerLeft = styled.div`
  background-color: #4682b4;
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
    height: auto;
    object-fit: cover;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const BiggerContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: #f3f4f6;
`;
