import React from "react";
import NewCustomerFormView from "./NewCustomerFormView";
import newCustomerFormData from "../../data/newCustomerFormData";
import { SectionContainer } from "../../style/newCustomerForm";

const NewCustomerForm = () => {
  return (
    <SectionContainer className="newCustomerForm">
      <NewCustomerFormView newCustomerFormData={newCustomerFormData} />
    </SectionContainer>
  );
};

export default NewCustomerForm;
