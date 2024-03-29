import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useRefreshToken from "../../hooks/useRefreshToken";

export const TokenContext = createContext(null);

export default function AdminAuth({ children }) {
	const navigate = useNavigate();
	const data = useRefreshToken();
	console.log(data());

	const [{ token }] = useState(() => {
		return {
			token: localStorage.getItem("cooperation_token"),
		};
	});

	useEffect(() => {
		if (!token) {
			// toast.error("Session expire, Log in again");
			navigate("/", { replace: true });
		} else {
			let id = setTimeout(() => {
				localStorage.removeItem(token);
				// navigate('/', { replace: true });
			}, 10800000);

			return () => {
				clearTimeout(id);
			};
		}
	}, [navigate, token]);
	return (
		<>
			<TokenContext.Provider value={[token]}>{children}</TokenContext.Provider>
		</>
	);
}