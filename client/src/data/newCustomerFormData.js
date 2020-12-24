const newCustomerFormData = {
  customer: {
    name: "Customer",
    data: [
      {
        id: "firstName",
        name: "firstName",
        placeholder: "First Name",
        type: "text",
      },
      {
        id: "lastName",
        name: "lastName",
        placeholder: "Last Name",
        type: "text",
      },
      {
        id: "username",
        name: "username",
        placeholder: "User Name",
        type: "text",
      },
      {
        id: "email",
        name: "email",
        placeholder: "Email",
        type: "email",
      },
      {
        id: "contactNumber",
        name: "contactNumber",
        placeholder: "Contact Number",
        type: "text",
      },
    ],
  },
  customerAddress: {
    name: "Customer Address",
    data: [
      {
        id: "customerStreet",
        name: "customerStreet",
        placeholder: "Billing Street Address",
        type: "text",
      },
      {
        id: "customerSuburb",
        name: "customerSuburb",
        placeholder: "Suburb",
        type: "text",
      },
      {
        id: "customerState",
        name: "customerState",
        placeholder: "State",
        type: "text",
      },
      {
        id: "customerPostcode",
        name: "customerPostcode",
        placeholder: "Post Code",
        type: "text",
      },
    ],
  },
  company: {
    name: "Company",
    data: [
      {
        id: "website",
        name: "website",
        placeholder: "Website",
        type: "text",
      },
      {
        id: "companyName",
        name: "companyName",
        placeholder: "Company Name",
        type: "text",
      },
      {
        id: "companyPhoneNumber",
        name: "companyPhoneNumber",
        placeholder: "Company Phone Number",
        type: "text",
      },
    ],
  },
  companyAddress: {
    name: "Company Address",
    data: [
      {
        id: "companyStreet",
        name: "companyStreet",
        placeholder: "Company Street Address",
        type: "text",
      },
      {
        id: "companySuburb",
        name: "companySuburb",
        placeholder: "Company Suburb",
        type: "text",
      },
      {
        id: "companyState",
        name: "companyState",
        placeholder: "State",
        type: "text",
      },
      {
        id: "companyPostcode",
        name: "companyPostcode",
        placeholder: "Post Code",
        type: "text",
      },
    ],
  },
};

export default newCustomerFormData;
