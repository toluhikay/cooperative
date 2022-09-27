import * as Yup from "yup";

export const LoginYupSchemma = Yup.object().shape({
  userName: Yup.string().required("Username is Required"),
  password: Yup.string().required("Password is Required"),
});
