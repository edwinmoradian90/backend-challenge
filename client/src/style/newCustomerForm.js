import styled from "styled-components";

const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  padding: 40px;
`;

const InputContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  border: 1px solid lightgray;
  border-radius: 5px;
  height: 20px;
  margin: 10px 0;
  padding: 10px;
  width: 400px;
`;

const SubmitButton = styled.button`
  background: blue;
  border: 0;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  padding: 15px 20px;
  width: 100%;
`;

export { Input, InputContainer, SectionContainer, SubmitButton };
