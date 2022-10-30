import { LoaderButton } from "../../../ui/button";
import { Input, Select } from "../../../ui/input";
import { useFormik } from "formik";
import { AccountValidationSchema } from "../../../yup";
import { Transactions } from "../../../api/Api";
import toast from "react-hot-toast";


// function joinAccountName(name) {
//     return (name.split(' ').join(''))
// }

export default function Modal(details) {

    const { type, token, name, MEMBER_ID } = details

    const formik = useFormik({
        initialValues: {
            amount: '',
            description: '',
            account:'',
        },
        validationSchema: AccountValidationSchema,
        onSubmit: (values) => {
            const value = { type, values, MEMBER_ID };

            Transactions(value, async (res) => {
                
                if (res) {
                    formik.setSubmitting(false);  
                    const { status, message} = await res;
                    if (status !== 'success') {
                        
                        toast.error(message);
                    } else {
                        toast.success(`Account ${type}ed successfully!`);
                    }
                    
                }
            },token)

            // set the loading state
            // call the request function
            //  check for success message and error message
            //  toaste the message
        }
    })
    
    const input_style = "form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";

    const select_style = "form-select appearance-none block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";

    return <div className="w-full h-screen bg-[rgba(0,0,0,0.8)] fixed top-0 left-20">
        <div className="w-full h-full flex items-center justify-center">
            <div className="w-1/2 h-[30rem] py-4 bg-white rounded-lg">
                    <div className="w-full mt-4">
                    <h1 className="text-3xl text-black font-bold">{name}</h1>
                    </div>
                <form className="grid grid-cols-1 w-2/3 -mt-6 h-full gap-y-4 content-center mx-auto" onSubmit={formik.handleSubmit}>

                <Input name='amount' placeholder='Enter amount' handleChange={formik.handleChange} value={formik.values.amount} error={formik.errors.amount} touched={formik.touched.description} input_style={input_style} />

                <Input name='description' placeholder='Enter description' handleChange={formik.handleChange} value={formik.values.description} error={formik.errors.description} touched={formik.touched.description} input_style={input_style} />

                    <Select select_style={select_style} name='account' label='account' value={formik.values.account} handleChange={formik.handleChange}>
                        {/* <option selected>Choose account</option> */}
                        <option value='thriftSavings'>Thrift savings</option>
                        <option value='shareCapital'>Share capital</option>
                        <option value='fine'>Fine</option>
                        <option value='loan'>Loan</option>
                        <option value='projectFinancing'>Project financing</option>
                        <option value='specialDeposit'>Special deposit</option>
                        <option value='commodityTrading'>Commodity trading</option>
                    </Select>
                <LoaderButton name={name} type='submit' loading={formik.isSubmitting}/>
            </form>     
        </div>
    </div>
</div>
}