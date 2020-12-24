import React from "react";
import {
  Input,
  InputContainer,
  SubmitButton,
} from "../../style/newCustomerForm";
import { Container } from "../../style/shared";

const NewCustomerFormView = (props) => {
  const { newCustomerFormData } = props;
  return (
    <Container className="newCustomerFormView">
      <div className="FormContainer">
        <InputContainer className="customerFormConatiner">
          <h1 className="customerFormTitle">New User Form</h1>
          {newCustomerFormData.map((input) => {
            const { type, name, placeholder, id } = input;
            return (
              <Input
                key={id}
                className={id}
                type={type}
                name={name}
                placeholder={placeholder}
              />
            );
          })}
        </InputContainer>
        <SubmitButton className="submitform">Submit</SubmitButton>
      </div>
    </Container>
  );
};

export default NewCustomerFormView;
