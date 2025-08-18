import { styled } from 'styled-components';

export const ContactLayoutComponent = styled.div`
  /* padding: 1rem; */

  input,
  textarea {
    background-color: transparent;
    border: 1px solid ${(props) => props.theme["beige-400"]};
    border-radius: 0.2rem;
    padding: 0.5rem;
    padding-left: 1rem;
    font-size: 0.8rem;
    color: ${(props) => props.theme["gray-600"]};

    outline: none;
    box-shadow: none;

    :focus {
      border-color: ${(props) => props.theme["beige-600"]};
      outline: none;
      box-shadow: none;
    }
  }

  @media (min-width: 720px) {
    display: flex;
    justify-content: center;
    margin-bottom: 4rem;
  }
`;

export const ContactContentComponent = styled.div`
  font-family: "Poppins";
  background-color: ${(props) => props.theme["beige-300"]};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem 1rem;

  @media (min-width: 720px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 10rem;
    padding: 2rem 2rem;
    width: 95%;
    border-radius: 0.2rem;
  }
`;

export const TitleComponent = styled.div`
  margin-bottom: 1.5rem;
`;

export const Divisor = styled.div`
  border: 1px solid ${(props) => props.theme["beige-400"]};
  width: 30%;
  @media (min-width: 720px) {
    width: 50%;
  }
`;

export const DataContactComponent = styled.div`
  gap: 1.5rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const DataContactContentComponent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme["gray-600"]};
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const FormComponent = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 2rem;
  @media (min-width: 720px) {
    padding: 1rem;
  }
`;

export const FieldsComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: 720px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const InputComponent = styled.input`
  font-size: 1rem;
  @media (min-width: 720px) {
    width: 32%;
  }
`;

export const TextAreaComponent = styled.textarea`
  font-size: 1rem;
  font-family: "Poppins";
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: ${(props) => props.theme["beige-600"]};
  padding: 1rem;
  border: none;
  border-radius: 0.2rem;
  color: ${(props) => props.theme["gray-300"]};
  font-family: "Poppins";
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme["beige-700"] || "#8B7355"};
  }

  @media (min-width: 720px) {
    width: 30%;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const NotificacaoComponent = styled.div<{ tipo: 'sucesso' | 'erro' }>`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: ${(props) => 
    props.tipo === 'sucesso' ? '#4CAF50' : '#f44336'
  };
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  font-family: "Poppins";
  font-size: 0.9rem;
  max-width: 350px;
  z-index: 9999;
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @media (max-width: 720px) {
    top: 10px;
    right: 10px;
    left: 10px;
    max-width: none;
  }
`;
