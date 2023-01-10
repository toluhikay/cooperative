import { Input, Select } from "../../ui/input";
import { useFormik } from "formik";
import { LoaderButton } from "../../ui/button";
import { MemberRegistration_update } from "../component/member/Logic";
import { useLocation } from "react-router-dom";
import { EditMemberDetails } from "../../api/Api";
import { useToken } from "../../hooks";
import { toast } from "react-hot-toast";

export function UpdateMemberDetails() {
	const location = useLocation();
	const [token] = useToken();

    const {firstName,role, lastName,phoneNumber,email,address,gender,username, id} = location.state


    const input_style = "form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";

    const select_style = "form-select appearance-none block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";




    const formik = useFormik({
			initialValues: {
				firstName: firstName,
				lastName: lastName,
				email: email,
				username: username,
				phoneNumber: phoneNumber,
				address: address,
				gender: gender,
				role: role,
				// loanStatus: loanStatus,
				// membershipStatus: membershipStatus,
				// nextOfKin: nextOfKin,
				// bankName: '',
				// accountNumber: accountNumber,
				// accountName:accountName,
		},
		onSubmit: (values) => {
			HandleRequest(values);
		}
	});

	 async function HandleRequest  (value) {
		 const response = await EditMemberDetails({ value, id, token });
		if (response) {
			formik.setSubmitting(false);
			if (response.statusText === 'OK') {
				toast.success('Record Updated')
			} else {
				
				toast.error('Error! something went wrong!')
			}
		}
}
	

		return (
			<>
				<MemberRegistration_update name="Update Member Information">
					<form onSubmit={formik.handleSubmit}>
						<div className="grid grid-cols-1 gap-x-4 ">
							<Input
								name="firstName"
								id="First Name"
								placeholder="Enter first name"
								handleChange={formik.handleChange}
								value={formik.values.firstName}
								error={formik.errors.firstName}
								touched={formik.touched.firstName}
								input_style={input_style}
							/>

							<Input
								name="lastName"
								id="Last Name"
								placeholder="Enter Last name"
								handleChange={formik.handleChange}
								value={formik.values.lastName}
								error={formik.errors.lastName}
								touched={formik.touched.lastName}
								input_style={input_style}
							/>
						</div>

						<div className="grid grid-cols-1 gap-x-4">
							<Input
								name="email"
								id="Email"
								placeholder="Enter email address"
								handleChange={formik.handleChange}
								value={formik.values.email}
								error={formik.errors.email}
								touched={formik.touched.email}
								input_style={input_style}
							/>

							<Input
								name="username"
								id="User name"
								placeholder="Enter user name"
								handleChange={formik.handleChange}
								value={formik.values.username}
								error={formik.errors.username}
								touched={formik.touched.username}
								input_style={input_style}
							/>
						</div>

						<div className="grid grid-cols-2 gap-x-4 ">
							<Select
								select_style={select_style}
								name="gender"
								label="Gender"
								value={formik.values.gender}
								handleChange={formik.handleChange}>
								<option selected>Choose Gender</option>
								<option value="male">Male</option>
								<option value="female">Female</option>
							</Select>

							<Input
								name="phoneNumber"
								id="Phone Number"
								placeholder="Phone Number"
								handleChange={formik.handleChange}
								value={formik.values.phoneNumber}
								error={formik.errors.phoneNumber}
								touched={formik.touched.phoneNumber}
								input_style={input_style}
							/>
						</div>

						<div className="grid grid-cols-2 gap-x-4 ">
							<Input
								name="address"
								id="Address"
								placeholder="Address"
								handleChange={formik.handleChange}
								value={formik.values.address}
								error={formik.errors.address}
								touched={formik.touched.address}
								input_style={input_style}
							/>

							<Select
								select_style={select_style}
								name="role"
								label="Role"
								value={formik.values.role}
								handleChange={formik.handleChange}>
								<option selected>Choose position</option>
								<option value="super_admin">Admin</option>
								<option value="member">Member</option>
							</Select>
						</div>
		

						
						<LoaderButton
							name="Update details"
							type="submit"
							loading={formik.isSubmitting}
						/>
					</form>
				</MemberRegistration_update>
			</>
		);
        
}