import { useContext } from "react";
import { TokenContext } from "../components/requestAuth/Logic";


export function useToken() {
    //context has getter and a setter
    const [token] = useContext(TokenContext);
    return [token];
};