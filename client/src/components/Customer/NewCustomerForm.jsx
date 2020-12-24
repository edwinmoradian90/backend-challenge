import React, { useState } from "react";
import axios from "axios";
import NewCustomerFormView from "./NewCustomerFormView";
import newCustomerFormData from "../../data/newCustomerFormData";
import { SectionContainer } from "../../style/newCustomerForm";

const NewCustomerForm = () => {
  const initialForm = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    contactNumber: "",
    customerStreet: "",
    customerSuburb: "",
    customerState: "",
    customerPostcode: "",
    website: "",
    companyName: "",
    companyPhoneNumber: "",
    companyStreet: "",
    companySuburb: "",
    companyState: "",
    companyPostcode: "",
  };
  const [form, setForm] = useState(initialForm);
  const [submitStatus, setSubmitStatus] = useState(false);
  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async () => {
    try {
      const user = await axios.post("users", form);

      if (user) {
        console.log(user);
        setForm(initialForm);
        setSubmitStatus(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SectionContainer className="newCustomerForm">
      <NewCustomerFormView
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        submitStatus={submitStatus}
        newCustomerFormData={newCustomerFormData}
      />
    </SectionContainer>
  );
};

export default NewCustomerForm;
