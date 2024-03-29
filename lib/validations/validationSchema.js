import * as yup from "yup";

export const fullNameValidationSchema = yup.object().shape({
  fullName: yup
    .string()
    .required()
    .matches(/(\w.+\s).+/, "Enter at least 2 names")
    .label("Full Name"),
});

export const idValidationSchema = yup.object().shape({
  id: yup.string().required().label("id"),
});

export const telValidationSchema = yup.object().shape({
  tel: yup.number().required().label("tel"),
});
