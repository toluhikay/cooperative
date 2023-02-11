import Header from "../../dashboard/header";
import { _member_details } from "../../lib/utils/Data";
import { GetMembers } from "../../api/Api";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useToken } from "../../hooks";
import { Close, FullPageLoader } from "../component/ui";
import { useNavigate } from "react-router-dom";
import { FilteredTable } from "../../components/accountdetailsComp/Logic";
import { ModalContainer } from "../component/modal/Logic";
import { DeleteMemberDetails } from "../../api/Api";

export function TableLink({ data, url, name, info }) {
	const navigate = useNavigate();
	return (
		<button
			className="py-2 px-4 bg-indigo-600 rounded text-white inline-block cursor-pointer"
			onClick={() => navigate(url, { state: data })}>
			{name}
		</button>
	);
}

export function render_head(tableInfo) {
	if (!tableInfo) return;
	return tableInfo.table_head.map((cur, id) => {
		return (
			<th
				id={id}
				className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
				{cur}
			</th>
		);
	});
}

const DeleteModal = ({ show, onClose }) => {
	const [token] = useToken();
	console.log(show?.id);
	const [loading, setLoading] = useState(false);
	const showModal = !show.show ? "top-full" : "top-0";
	const values = { id: show?.id, token };

	const deletMemberConfirmation = async () => {
		setLoading(true);
		const response = await DeleteMemberDetails(values);
		if (response) {
			setLoading(false);
			console.log(response);
			if (
				response?.status === 400 ||
				response?.status === 403 ||
				response?.status === 404
			) {
				toast.error("Something went wrong");
			} else {
				onClose();
				toast.success("Member deleted succesfully!");
				window.location.reload();
			}
		}
	};

	return (
		<ModalContainer show={showModal}>
			<div className="w-full h-full flex items-center justify-center">
				<div
					className="p-2 rounded-lg  absolute top-10 cursor-pointer"
					onClick={onClose}>
					<Close />
				</div>
				<div className="w-[37rem] h-[20rem] flex flex-col justify-center py-4 bg-white rounded-lg">
					<div className="w-full mt-4">
						<p className="text-2xl">
							Are you sure you want to delete member with the username{" "}
							{show.name}?
						</p>
						<button
							onClick={onClose}
							className="py-2 px-12 my-10 mx-4 rounded-lg text-white bg-red-900 hover:bg-red-700 transition-all">
							NO
						</button>
						<button
							type={"button"}
							onClick={deletMemberConfirmation}
							className="py-2 px-12 rounded-lg text-white bg-indigo-600 hover:bg-indigo-500 transition-all">
							{!loading ? (
								"YES"
							) : (
								<div
									class="spinner-border animate-spin inline-block w-4 h-4 border-2 rounded-full border-t-indigo-600"
									role="status">
									<span class="visually-hidden "></span>
								</div>
							)}
						</button>

						{/* <button className="py-2 px-12 rounded-lg text-white bg-indigo-600 hover:bg-indigo-500 transition-all">
							YES
						</button> */}
					</div>
				</div>
			</div>
		</ModalContainer>
	);
};
export function renderTable_body(tableInfo, fn) {
	if (!tableInfo) return;
	return tableInfo.map((cur, idx) => {
		const {
			id,
			firstName,
			lastName,
			username,
			phoneNumber,
			role,
			gender,
			address,
			email,
		} = cur;
		const style =
			"px-6 py-4 text-start border-b border-gray-200 whitespace-nowrap";
		return (
			<tr key={id}>
				<td className={style}>{idx}</td>

				<td className={style}>{firstName}</td>

				<td className={style}>{lastName}</td>

				<td className={style}>{username}</td>
				<td className={style}>{email}</td>
				<td className={style}>{phoneNumber}</td>

				<td className={style}>{role}</td>
				<td class={style}>{gender}</td>
				<td class={style}>{address}</td>
				<td className={style}>
					<TableLink
						data={cur}
						url={`/admin-dashboard/registered-member/${id}`}
						name="update"
					/>
				</td>
				<td className={style}>
					<TableLink
						data={cur}
						url={`/admin-dashboard/registered-member-details/${id}`}
						name="View details"
					/>
				</td>
				<td className={style}>
					<button
						className="py-2 px-4 bg-red-800 rounded text-white"
						onClick={() => {
							fn(id, username);
						}}>
						Remove
					</button>
				</td>
			</tr>
		);
	});
}

export default function AccountSummary() {
	const [members, setMembers] = useState([]);
	const [token] = useToken();
	const [request, setRequest] = useState(true);
	const [page, setPage] = useState(1);
	const [showDelete, setDelete] = useState({ show: false, id: null, name: "" });

	useEffect(() => {
		GetMembers(
			page,
			async (res) => {
				const { status, members, message } = await res;
				if (!status) return;
				else {
					setRequest(false);
					if (status !== "success") {
						toast.error(message);
					} else {
						setMembers(members);
					}
				}
			},
			token,
		);
	}, [token, page]);

	function previousPage() {
		setPage((prev) => prev - 1);
	}

	function nextPage() {
		setPage((prev) => prev + 1);
	}
	function onDelete(id, name) {
		setDelete({ ...showDelete, show: true, id: id, name: name });
	}

	return (
		<>
			{showDelete ? (
				<DeleteModal
					show={showDelete}
					onClose={() => setDelete({ ...showDelete, show: false })}
				/>
			) : null}

			<div className="flex flex-col px-4">
				<Header name="All Registered Member" />
				<div className="py-3 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
					{request ? (
						<FullPageLoader />
					) : (
						<div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
							<FilteredTable
								data={members}
								table_head={render_head(_member_details)}
								render_body={(a) => renderTable_body(a, onDelete)}
								page={page}
								prev={previousPage}
								next={nextPage}
								onDelete={onDelete}
							/>
						</div>
					)}
				</div>
			</div>
		</>
	);
}
