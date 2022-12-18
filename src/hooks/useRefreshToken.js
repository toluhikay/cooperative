import { AxiosRequest } from "../api/BaseURL";

const useRefreshToken = () => {
	// const { setAuth } = useAuth();

	const refresh = async () => {
		const response = await AxiosRequest.get("/regenerate-access-token", {
			// withCredentials: true,
		});
		// setAuth(prev => {
		//     console.log(JSON.stringify(prev));
		//     console.log(response.data.accessToken);
		//     return { ...prev, accessToken: response.data.accessToken }
		// });
		console.log(response);
		// return response.data.accessToken;
		return response;
	};
	return refresh;
};

export default useRefreshToken;
