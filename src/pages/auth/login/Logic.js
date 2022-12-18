import {  useFormik, } from "formik";
import { LoginYupSchemma } from "../../../yup";
import {LoginReq} from "../../../api/Api";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";



export function Error({ error }) {
  return <div className="text-red-700 mt-2 text-sm text-start">{error}</div>;
}


function saveToken(token){
 localStorage.setItem('cooperation_token', token) 
}



 function Login() {
  const navigate = useNavigate()

 function loginRequest(data){
    if (data.remember) {
      localStorage.setItem("cooperation_password", data.password);
      localStorage.setItem("cooperation_userName", data.userName);
    }else {
      localStorage.setItem("cooperation_password", data.password);
      localStorage.setItem("cooperation_userName", data.userName);
    }
    
    let value = {
      username:data.userName,
      password:data.password
    }
   LoginReq(value, async (res) => {
			const response = await res;
			if (response) {
				formik.setSubmitting(false);
				if (response.statusText === "Accepted") {
					console.log(await response);
					const { role } = response?.data?.user;
					saveToken(response?.data?.accessToken);
					if (role === "super_admin")
						navigate("/admin-dashboard/account-overview", { replace: true });
				}
			} else {
				toast.error(response.message);
			}
		});
  }
  

const formik = useFormik({
  initialValues: {
    userName:localStorage.getItem("cooperation_userName"),
    password:localStorage.getItem("cooperation_userName"),
    remember: false,
  },
  
  validationSchema:LoginYupSchemma,
  onSubmit: (value,{setFieldValue})=> {
      setFieldValue({ remember: true });
      loginRequest(value)
}
})
    
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

        <form class='mt-10' onSubmit={formik.handleSubmit}>
          <label class='block'>
            <span class='inline-block my-2 text-base text-gray-600'>
              User Name
            </span>
            <input
              type='text'
              id='userName'
              name='userName'
              onChange={formik.handleChange}
              value={formik.values.userName}
              class='block w-full mt-2 py-2 px-2 border border-gray-600 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500 bg-[#f4f4f4]'
            />
            {formik.errors.userName && formik.touched.userName && (
              <Error error={formik.errors.userName} />
            )}
          </label>

          <label class='block mt-3'>
            <span class='inline-block text-base text-gray-600 my-2'>
              Password
            </span>
            <input
              type='password'
              id='password'
              name='password'
              onChange={formik.handleChange}
              value={formik.values.password}
              class='block w-full mt-2 py-2 px-2 border border-gray-600 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500 bg-[#f4f4f4]'
              v-model='password'
            />
            {formik.errors.password && formik.touched.password && (
              <Error error={formik.errors.password} />
            )}
          </label>

          <div class='flex items-center justify-between mt-4'>
            <div>
              <label class='inline-flex items-center'>
                <input
                  type='checkbox'
                  id='remember'
                  name='remember'
                  class='text-indigo-600 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500'
                />
                <span class='mx-2 text-sm text-gray-600'>Remember me</span>
              </label>
            </div>

            <div>
              <Link
                class='block text-sm text-indigo-700 fontme hover:underline'
                to='/forget-password'>
                Forgot your password?
              </Link>
            </div>
          </div>

          <div class='mt-6'>
            <button
              type='submit'
              class='w-full px-4 py-3 text-sm text-center text-white bg-indigo-600 rounded-md focus:outline-none hover:bg-indigo-500'>
              {formik.isSubmitting ? (
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
        </form>
      </div>
    </div>
  );
}

export default (Login);
