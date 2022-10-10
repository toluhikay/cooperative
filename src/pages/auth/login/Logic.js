import { Field, Form, withFormik } from "formik";
import { LoginYupSchemma } from "../../../yup";
import {LoginReq} from "../../../api/Api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const validationWithFormik = withFormik({
  mapPropsToValues: ({
    userName = localStorage.getItem("cooperation_userName"),
    password = localStorage.getItem("cooperation_userName"),
    remember = false,
  }) => ({
    userName,
    password,
    remember,
  }),
  validationSchema: LoginYupSchemma,

  handleSubmit: (values, { setStatus, setFieldValue }) => {
    setFieldValue({ remember: true });
    setStatus(true);

    if (!values.remember) {
      localStorage.setItem("cooperation_userName", '');
      localStorage.setItem("cooperation_password", '');
    }else {
      localStorage.setItem("cooperation_password", values.password);
      localStorage.setItem("cooperation_userName", values.userName);
    }
    let value = {
      username:values.userName,
      password:values.password
    }
    // const navigate = useNavigate()
    LoginReq(value,(res)=> {

      if(!res.status === 200){
        toast.error(res.statusText)
      }
      // navigate('dashboard')
        
      console.log(res)
      console.log('woking')
    })

  },
  displayName: "Login",
});

export function Error({ error }) {
  return <div className='text-red-700 mt-2 text-sm'>{error}</div>;
}

 function Login({ errors, touched, status }) {
  console.log(status)

  return (
    <div class='flex items-center justify-center h-screen px-6 bg-gray-200'>
      <div class='w-full max-w-md p-6 bg-white rounded-md shadow-md'>
        <div class='flex items-center justify-center'>
          <svg
            class='w-10 h-10'
            viewBox='0 0 512 512'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z'
              fill='#4C51BF'
              stroke='#4C51BF'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              d='M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z'
              fill='white'
            />
          </svg>
          <span class='text-2xl font-semibold text-gray-700'>V-Dashboard</span>
        </div>

        <Form class='mt-10'>
          <label class='block'>
            <span class='inline-block my-2 text-base text-gray-600'>
              User Name
            </span>
            <Field
              type='text'
              id='userName'
              name='userName'
              class='block w-full mt-2 py-2 px-2 border border-gray-600 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500 bg-[#f4f4f4]'
            />
            {errors.userName && touched.userName && (
              <Error error={errors.userName} />
            )}
          </label>

          <label class='block mt-3'>
            <span class='inline-block text-base text-gray-600 my-2'>
              Password
            </span>
            <Field
              type='password'
              id='password'
              name='password'
              class='block w-full mt-2 py-2 px-2 border border-gray-600 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500 bg-[#f4f4f4]'
              v-model='password'
            />
            {errors.password && touched.password && (
              <Error error={errors.password} />
            )}
          </label>

          <div class='flex items-center justify-between mt-4'>
            <div>
              <label class='inline-flex items-center'>
                <Field
                  type='checkbox'
                  id='remember'
                  name='remember'
                  class='text-indigo-600 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500'
                />
                <span class='mx-2 text-sm text-gray-600'>Remember me</span>
              </label>
            </div>

            <div>
              <a
                class='block text-sm text-indigo-700 fontme hover:underline'
                href='/'>
                Forgot your password?
              </a>
            </div>
          </div>

          <div class='mt-6'>
            <button
              type='submit'
              class='w-full px-4 py-3 text-sm text-center text-white bg-indigo-600 rounded-md focus:outline-none hover:bg-indigo-500'>
              {status ? (
                <div
                  class='spinner-border animate-spin inline-block w-6 h-6 border-2 rounded-full border-t-indigo-600'
                  role='status'>
                  <span class='visually-hidden '></span>
                </div>
              ) : (
                "Sign in"
              )}
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default validationWithFormik(Login);
