import React from "react";
import {
  FormCard,
  Input,
  InputContainer,
  SubmitButton,
  SubmitConfirmation,
} from "../../style/newCustomerForm";
import { Container, ToggleContent } from "../../style/shared";

const NewCustomerFormView = (props) => {
  const { form, onChange, onSubmit, submitStatus, newCustomerFormData } = props;
  return (
    <Container className="newCustomerFormView">
      <div className="FormContainer">
        <ToggleContent condition={submitStatus} className="confirmationMessage">
          <SubmitConfirmation>Form Submitted!</SubmitConfirmation>
        </ToggleContent>
        <InputContainer className="customerFormContainer">
          {Object.keys(newCustomerFormData).map((field) => {
            const data = newCustomerFormData[field].data.map((input) => {
              const { type, name, placeholder, id } = input;
              const value = form[name];
              return (
                <Input
                  onChange={(e) => onChange(e)}
                  key={id}
                  className={id}
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  value={value}
                />
              );
            });
            return (
              <FormCard className="formCard">
                <h1>{newCustomerFormData[field].name}</h1>
                {data}
              </FormCard>
            );
          })}
        </InputContainer>
        <SubmitButton onClick={onSubmit} className="submitform">
          Submit
        </SubmitButton>
      </div>
    </Container>
  );
};

export default NewCustomerFormView;
