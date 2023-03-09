import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GetMemberTransaction } from "../../api/Api";
import { FilteredTable } from "../../components/accountdetailsComp/Logic";
import { useToken } from "../../hooks";
import { FullPageLoader } from "../component/ui";
import { renderTable_body, render_head } from "./TransactionComp";
import toast from "react-hot-toast";
import Header from "../../dashboard/header";

export default function MemberAccountDetails() {
	const [request, setRequest] = useState(true);
	const [data, setData] = useState([]);
	const [page, setPage] = useState(1);

	const location = useLocation();
	const [token] = useToken();
	const account = location.pathname.split("/")[3];
	const id = location.pathname.split("/")[4];

	function nextPage() {
		setPage((state) => state + 1);
	}

	function previousPage() {
		setPage((state) => state - 1);
	}

	useEffect(() => {
		const details = { MEMBER_ID: account, TRANSACTION_TYPE: id };

		GetMemberTransaction(
			details,
			async (res) => {
				const { status, message, transactions } = await res;
				if (status) {
					setRequest(false);
					if (status !== "success") {
						toast.error(message);
					} else {
						setData(transactions);
						// setData(memberaccountData)
					}
				}
			},
			token,
		);
	}, [id, account, token]);

	return (
		<section className="h-screen w-full">
			<Header name="Individual Account Details" />

			{request ? (
				<FullPageLoader />
			) : (
				<div>
					<FilteredTable
						data={data}
						table_head={render_head(data)}
						render_body={(a) => renderTable_body(a)}
						page={page}
						c
						prev={previousPage}
						next={nextPage}
					/>
				</div>
			)}
		</section>
	);
}
