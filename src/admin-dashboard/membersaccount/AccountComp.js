import { currencyFormater } from "../../lib/utils/Data";

export function render_head(a) {
	return ["SN", "Firstname", "Lastname", "Username", "Total contribution"].map(
		(cur, id) => {
			return (
				<th
					id={id}
					className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
					{cur}
				</th>
			);
		},
	);
}

export function renderTable_body(tableInfo) {
	if (!tableInfo) return;
	return tableInfo.map((cur, idx) => {
		const { accountInformation, user, id } = cur;
		const value = Object.values(accountInformation)[0];

		const style =
			"px-6 py-4 text-start border-b border-gray-200 whitespace-nowrap";
		return (
			<tr key={idx}>
				<td className={style}>{idx + 1}</td>
				<td className={style}>{user?.firstName}</td>
				<td className={style}>{user?.lastName}</td>
				<td className={style}>{user?.username}</td>
				<td className={style}>{currencyFormater(value)}</td>
			</tr>
		);
	});
}
