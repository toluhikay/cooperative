import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { RegisterMemberSchema } from "../../yup";
import { LoaderButton } from "../../ui/button";
import { RegisterMember } from "../../api/Api";
import { useToken } from "../../hooks";
import toast from "react-hot-toast";
import { MemberRegistration_update } from "../component/member/Logic";
import { Input, Select } from "../../ui/input";
import { GetBankList } from "../../api/Api";


export default function MemberRegistration() {
const [bankList, setBankList] = useState([])

  const input_style = "form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";

    const select_style = "form-select appearance-none block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";
  const [token] = useToken()

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
            },token)
      }
      
    
  useEffect(() => {
    GetBankList(async (res) => {
      const status = await res;
      if (status.error) {
        toast.error(status.error)
      } else {
        
        setBankList(status.success)
      };    
    });
  }, []);

  function renderList() {
    
    return bankList.map(({name, id}) => {
      return <option key={id} value={name}>{name }</option>

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
    role: '',
    loanStatus: '',
    membershipStatus: '',
    nextOfKin: '',
    bankName: '',
    accountNumber: "",
    accountName:'',
    
        
        
    },
    validationSchema:RegisterMemberSchema,
  onSubmit: (value) => {
        registerMemberRequest(value)
    }

})


    return (
        <MemberRegistration_update>

        <form onSubmit={formik.handleSubmit}>

        <div className="grid grid-cols-2 gap-x-4 ">
            <Input name='firstName' id='firstname' placeholder='First name' handleChange={formik.handleChange} value={formik.values.firstName} error={formik.errors.firstName} touched={formik.touched.firstName} input_style={input_style} />

            <Input name='lastName' id='lastname' placeholder='Last name' handleChange={formik.handleChange} value={formik.values.lastName} error={formik.errors.lastName} touched={formik.touched.lastName} input_style={input_style} />
        </div>

        <div className="grid grid-cols-2 gap-x-4">
            <Input name='email' id='email' placeholder='Email address' handleChange={formik.handleChange} value={formik.values.email} error={formik.errors.email} touched={formik.touched.email} input_style={input_style} />

            <Input name='username' id='username' placeholder='User name' handleChange={formik.handleChange} value={formik.values.username} error={formik.errors.username} touched={formik.touched.username} input_style={input_style} />
        </div>

        <div className="grid grid-cols-2 gap-x-4 ">
            <Select select_style={select_style} name='gender' label='Gender' value={formik.values.gender} handleChange={formik.handleChange}>
            <option selected>Choose Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            </Select>

            <Input name='phoneNumber' id='phoneNumber' placeholder='Phone Number' handleChange={formik.handleChange} value={formik.values.phoneNumber} error={formik.errors.phoneNumber} touched={formik.touched.phoneNumber} input_style={input_style} />

            
        </div>
        
        <div className="grid grid-cols-2 gap-x-4 ">
            <Input name='address' id='address' placeholder='Address' handleChange={formik.handleChange} value={formik.values.address} error={formik.errors.address} touched={formik.touched.address} input_style={input_style} />

            <Select select_style={select_style} name='role' label='role' value={formik.values.role} handleChange={formik.handleChange}>
            <option selected>Choose position</option>
            <option value="super_admin">Admin</option>
            <option value="member">Member</option>
            </Select>
            </div>
        <div className="grid grid-cols-2 gap-x-4 ">
            <Input name='loanStatus' id='loanStatus' placeholder='Loan Status' handleChange={formik.handleChange} value={formik.values.loanStatus} error={formik.errors.loanStatus} touched={formik.touched.loanStatus} input_style={input_style} />

            <Input name='member' id='member' placeholder='Member status' handleChange={formik.handleChange} value={formik.values.membershipStatus} error={formik.errors.membershipStatus} touched={formik.touched.membershipStatus} input_style={input_style} />
        </div>

        <div className="grid grid-cols-2 gap-x-4 ">
            <Input name='nextOfKin' id='nextOfKin' placeholder='Next of kin' handleChange={formik.handleChange} value={formik.values.nextOfKin} error={formik.errors.nextOfKin} touched={formik.touched.nextOfKin} input_style={input_style} />

            <Select select_style={select_style} name='title' label='title' value={formik.values.role} handleChange={formik.handleChange}>
            <option selected>Choose Title</option>
            <option value="mr">Mr.</option>
            <option value="mrs">Mrs.</option>
            <option value="miss">Miss</option>
            </Select>  
        </div>        

        <div className="grid grid-cols-2 gap-x-4 ">
            <Input name='accountNumber' id='accountNumber' placeholder='Account number' handleChange={formik.handleChange} value={formik.values.accountNumber} error={formik.errors.accountNumber} touched={formik.touched.accountNumber} input_style={input_style} />

            <Input name='accountName' id='accountName' placeholder='Account name' handleChange={formik.handleChange} value={formik.values.accountNumber} error={formik.errors.accountNumber} touched={formik.touched.accountNumber} input_style={input_style} />
        </div>
          <Select select_style={select_style} name='bankname' label='list of banks' value={formik.values.bankName} handleChange={formik.handleChange}>
         
            <option selected>Choose Bank</option>
            {renderList()}
        </Select>
        <LoaderButton name="Add member" type='submit' loading={formik.isSubmitting} />
            </form>
        </MemberRegistration_update>
    )
}