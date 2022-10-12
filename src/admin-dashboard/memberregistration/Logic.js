import React from "react";
import { useFormik } from "formik";
import { RegisterMemberSchema } from "../../yup";
import { Error } from "../../pages/auth/login/Logic";
import { LoaderButton } from "../../ui/button";
import { RegisterMember } from "../../api/Api";
import toast from "react-hot-toast";


export default function MemberRegistration(){

    function registerMemberRequest(data){
   
    
        
        RegisterMember(data,async(res)=> {
          
          const status = await res;
          if(status){
            formik.setSubmitting(false)
            if(status.status === 'success'){
                toast.success(status.message)
            
            }else {
              toast.error(status.message)
      
            }
          }
            })
      }
      
    

    
const formik  = useFormik({
    initialValues:{
        firstName:'',
        lastName:'',
        email:'',
        username:'',
        phoneNumber:'',
        address:'',
        gender:'',
        role:''
    },
    validationSchema:RegisterMemberSchema,
    onSubmit:(value)=> {
        registerMemberRequest(value)
    }

})


    return (
<section>
<article className="container mx-auto h-screen flex items-center justify-center ">       
<div class="block p-6 rounded-lg bg-white lg:w-2/3 ">
  <form onSubmit={formik.handleSubmit}>
      <div class="form-group mb-6">
        <input type="text" class="form-control
          block
          w-full
          px-3
          py-3
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="firstName"
          name="firstName"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          aria-describedby="firstName" placeholder="First name"/>
          {formik.errors.firstName && formik.touched.firstName && (
              <Error error={formik.errors.firstName} />
            )}
      </div>
      <div class="form-group mb-6">
        <input type="text" class="form-control
          block
          w-full
          px-3
          py-3
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="lastName"
          name="lastName"
          onChange={formik.handleChange}
          value={formik.values.lastName}
          aria-describedby="lastName" placeholder="Last name"/>
          {formik.errors.lastName && formik.touched.lastName && (
              <Error error={formik.errors.lastName} />
            )}
      </div>
    <div class="form-group mb-6">
      <input type="email" class="form-control block
        w-full
        px-3
        py-3
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="email"
        onChange={formik.handleChange}
          value={formik.values.email}
          name='email'
        placeholder="Email address"/>
        {formik.errors.email && formik.touched.email && (
              <Error error={formik.errors.email} />
            )}
    </div>
    <div class="form-group mb-6">
      <input type="text" class="form-control block
        w-full
        px-3
        py-3
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="username"
        placeholder="User name"
        onChange={formik.handleChange}
          value={formik.values.username}
          name='username'
        />
    </div>
    <div class="mb-3">
    <select class="form-select appearance-none
      block
      w-full
      px-3
      py-3
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"
      id="gender"
      onChange={formik.handleChange}
      defaultChecked={formik.values.gender}
        >
        <option selected>Gender</option>
        <option value="male">Male</option>
        <option value="female">female</option>
    </select>
  </div>
    <div class="form-group mb-6">
      <input type="tel" class="form-control block
        w-full
        px-3
        py-3
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="phoneNumber"
        onChange={formik.handleChange}
          value={formik.values.phoneNumber}
        placeholder="Phone number"/>
        {formik.errors.phoneNumber && formik.touched.phoneNumber && (
              <Error error={formik.errors.phoneNumber} />
            )}
    </div>
    <div class="form-group mb-6">
      <input type="text" class="form-control block
        w-full
        px-3
        py-3
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="address"
        placeholder="Address"
        onChange={formik.handleChange}
        value={formik.values.address}
        />
    </div>
  <div class="mb-3">
    <select class="form-select appearance-none
      block
      w-full
      px-3
      py-3
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"
      id="role"
      defaultValue={formik.values.role}
      onChange={formik.handleChange}
    >
        <option selected>Choose role</option>
        <option value="member">Member</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
    </select>  
</div>
<LoaderButton name="Register member" type='submit' loading={formik.isSubmitting} />
  </form>
</div>
</article>
</section>
    )
}