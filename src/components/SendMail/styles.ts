import { styled } from "styled-components";

export const ContactLayoutComponent = styled.div`
  padding: 1rem;

  input,
  textarea {
    background-color: transparent;
    border: 1px solid ${(props) => props.theme["beige-400"]};
    border-radius: 5px;
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
`;

export const ContactContentComponent = styled.div`
  font-family: "Poppins";
  background-color: ${(props) => props.theme["beige-300"]};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem 1rem;
`;

export const TitleComponent = styled.div`
`

export const Divisor = styled.div`
  border: 1px solid ${(props) => props.theme["beige-400"]};
  width: 30%;
  /* height: 20px; Ajuste conforme necessário */
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
  gap: 2rem;
`;

export const InputComponent = styled.input`
  font-size: 1rem;
`;

export const TextAreaComponent = styled.textarea`
  font-size: 1rem;
  font-family: "Poppins";
`;
