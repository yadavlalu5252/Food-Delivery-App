import { useEffect, useState } from "react";
import { MENU_API } from "./constant";

const useRestrauntMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (resId) {
            fetchData();
        }
    }, [resId]);

console.log("urm",resInfo);
const fetchData = async () => {
    try {
        const response = await fetch(`${MENU_API}${resId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setResInfo(json.data);
    } catch (err) {
        console.error("Error fetching menu:", err);
        setError(err.message);
    }
};
    return {resInfo, error};
}

export default useRestrauntMenu;