import axios from "axios";

const useRefreshToken = () => {
	const refresh = async () => {
		const response = await axios.get("/refresh", {
			withCredentials: true,
		});
		console.log(response);
	};

	return refresh;
};

export default useRefreshToken;
