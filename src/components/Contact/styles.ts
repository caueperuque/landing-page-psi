import { styled } from "styled-components";

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
  background-color: ${(props) => props.theme["beige-600"]};
  padding: 1rem;
  border: none;
  border-radius: 0.2rem;
  color: ${(props) => props.theme["gray-300"]};
  font-family: "Poppins";
  width: 100%;
  @media (min-width: 720px) {
    width: 30%;
  }
`;
