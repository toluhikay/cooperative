import { Close } from "../admin-dashboard/component/ui";

export default function Logout() {
	// const show = ? 'top-full' : 'top-0';
	let show;
	return (
		<div
			className={`w-full h-screen bg-[rgba(0,0,0,0.8)] transition-all ease duration-300 fixed ${show} left-20`}>
			<div className="w-full h-full flex items-center justify-center">
				<div
					className="p-2 rounded-lg  absolute bottom-10 cursor-pointer"
					// onClick={() => remove("")}
				>
					<Close />
				</div>
				<div className="w-1/2 h-[30rem] py-4 bg-white rounded-lg">
					<div className="w-full mt-4">
						<h1 className="text-3xl text-black font-bold">''</h1>
					</div>
				</div>
			</div>
		</div>
	);
}
