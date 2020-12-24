import styled from "styled-components";

const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  padding: 40px;
`;

const FormCard = styled.div`
  background: #fff;
  border: 1px solid lightgray;
  border-radius: 5px;
  box-shadow: 0 7px 30px -10px rgba(150, 170, 180, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 0;
  padding: 20px;
`;

const InputContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  border: 1px solid lightgray;
  border-radius: 5px;
  height: 20px;
  margin: 10px 0;
  padding: 10px;
  width: 400px;
`;

const SubmitConfirmation = styled.h1`
  background: lightgreen;
  border-radius: 5px;
  color: #fff;
  margin: 10px 0;
  padding: 20px 0;
  text-align: center;
  width: 100%;
`;

const SubmitButton = styled.button`
  background: lightgreen;
  border: 0;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  padding: 15px 20px;
  width: 100%;
`;

export {
  FormCard,
  Input,
  InputContainer,
  SectionContainer,
  SubmitButton,
  SubmitConfirmation,
};
