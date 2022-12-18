import { currencyFormater } from "../../lib/utils/Data";

export function render_head() {
	return ["S/N", "Firstname", "Lastname", "Username", "Total contribution"].map(
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
		const { id, firstName, lastName, username, Total } = cur;

		const style =
			"px-6 py-4 text-start border-b border-gray-200 whitespace-nowrap";
		return (
			<tr key={idx}>
				<td className={style}>{id}</td>
				<td className={style}>{firstName}</td>
				<td className={style}>{lastName}</td>
				<td className={style}>{username}</td>
				<td className={style}>{currencyFormater(Total)}</td>
			</tr>
		);
	});
}
