import { TableLink } from "../userlist/Logic";
import { currencyFormater } from "../../lib/utils/Data";

export function render_head() {
       return ['Date', 'amount', 'Amount', 'description', 'TransactionType', 'User', 'Update Account' ].map((cur, id) => {
        return (
            <th id={id}
                className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
            >
                {cur}
            </th>
             
        )
    });
  }



  export function renderTable_body(tableInfo) {
    if (!tableInfo) return;
      return tableInfo.map((cur) => {
          const { account, amount, date, description, transactionType, user, id } = cur;
        const style = "px-6 py-4 text-start border-b border-gray-200 whitespace-nowrap";
        return (
					<tr>
						<td key={id} className={style}>
							{date}
						</td>
						<td key={id} className={style}>
							{account}
						</td>
						<td key={id} className={style}>
							{currencyFormater(amount)}
						</td>
						<td key={id} className={style}>
							{description}
						</td>
						<td key={id} className={style}>
							{transactionType}
						</td>
						<td key={id} className={style}>
							{user}
						</td>

						<td>
							{/* <TableLink  data={cur} url={`admin-dashboard/registered-member-details/63482f57e1189c6d372002db/shareCapital/${id}`} name='update' /> */}
						</td>
					</tr>
				);
    });
};