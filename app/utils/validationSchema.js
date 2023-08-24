import * as yup from "yup";

export const fullNameValidationSchema = yup.object().shape({
  fullName: yup
    .string()
    .required()
    .matches(/(\w.+\s).+/, "Enter at least 2 names")
    .label("Full Name"),
});

export const idValidationSchema = yup.object().shape({
  id: yup.number().required().label("id"),
});
