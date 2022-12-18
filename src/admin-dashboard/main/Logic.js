import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import MemberRegistration from "../userregistration";
import News from '../news';
import AccountSummary from '../userlist';
import Overview from "../overview";
import MemberAccount from "../membersaccount";
import UpdateMemberDetails from "../update/index";
import MemberDetails from "../memberdetails";
import MemberAccountDetails from "../membertransaction";
import AdminAuth from "../adminAuth";



export default function MainDashboard() {
    
    const location = useLocation();
    
    return (
			<>
				<AdminAuth>
					{/* <Header /> */}

					<Routes>
						<Route
							path={
								location.pathname === "admin-dashboard/" && "/account-overview"
							}
							index
							element={<Overview />}
						/>
						<Route path="/account-overview" element={<Overview />}></Route>
						<Route
							path="/member-registration"
							element={<MemberRegistration />}
						/>
						{/* <Route path='/member-registration' element={<MemberRegistration/>}/> */}
						<Route path="/news" element={<News />} />
						<Route path="/registered-member" element={<AccountSummary />} />
						{/* <Route path='/registered-member' element={<AccountSummary/>}/> */}
						<Route path="/account-overview/:id" element={<MemberAccount />} />
						<Route
							path="/registered-member/:id"
							element={<UpdateMemberDetails />}
						/>
						<Route
							path="/registered-member-details/:id"
							element={<MemberDetails />}
						/>
						<Route
							path="/registered-member-details/:id/:name"
							element={<MemberAccountDetails />}
						/>
						{/* <Route path='/log-out' element={<Logout />} /> */}
					</Routes>
				</AdminAuth>
			</>
		);
    
};