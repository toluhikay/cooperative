import RequestAuth from "../components/requestAuth";
import MainDashboard from "./main";
import SideBar from "./sidebar";



const dashboardLinks = [
	{
		id: 0,
		name: "Overview",
		path: "account-overview",
		header: "members account overview",
	},
	{
		id: 3,
		name: "Registered member",
		path: "registered-member",
		header: "registered member",
	},
	{
		id: 4,
		name: "Register member",
		path: "member-registration",
		header: "New member registration",
	},
	// { id: 5, name: "News", path: "news", header: "News Section" },
];


export default function AdminDashboard(){
    return (
    <>
    <RequestAuth>

    <div class="flex h-screen bg-gray-200 font-roboto">
    <SideBar paths={dashboardLinks}/>

    <div class="flex-1 flex flex-col overflow-hidden">

      <div class="flex-1 px-6 overflow-x-show overflow-y-auto bg-gray-200">
        <MainDashboard/>
      </div>
    </div>
  </div>
</RequestAuth>
</>
    )
}