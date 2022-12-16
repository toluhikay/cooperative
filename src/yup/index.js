import * as Yup from "yup";
import 'yup-phone';

export const LoginYupSchemma = Yup.object().shape({
  userName: Yup.string().required("Username is Required"),
  password: Yup.string().required("Password is Required"),
});


export const ForgetPasswordSchema = Yup.object().shape({
  email:Yup.string().required('Admin email is required').email('Invalid email')
})

export const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string().required('Password is required!'),
  confirm_password: Yup.string().oneOf([Yup.ref('password')],'Confirm password must match password').required('Please confirm your password'),
})


export const RegisterMemberSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required!'),
  lastName: Yup.string().required('Last name is required!'),
  email: Yup.string().required('Email is required!').email('must be a valid email'),
  phoneNumber: Yup.string().required('Phone number is required!').phone('NGN', 'Add the +234 at the beginning of your phone number'),
  nextOfKin: Yup.string().required('Next of kin is required'),
  accountName: Yup.string().required('Account name is required'),
  accountNumber: Yup.string().required('Account number is required'),
  membershipStatus: Yup.string().required('Membership status is required!'),
  loanStatus: Yup.string().required('Loan status is required'),
  
});

export const AccountValidationSchema = Yup.object().shape({
  amount: Yup.string().required('Amount is required'),
  description: Yup.string().required('Description is required'),
  account: Yup.string().required('Account is required.')
})
