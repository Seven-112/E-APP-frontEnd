import { VARIABLES } from "../../constants/appConstants";

export const GET_PRODUCTS = 'GET_PRODUCTS';


export const getProducts = () => {
    return async dispatch => {
        const response = await fetch(`${VARIABLES.serverUrl}/product`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

        const resData = await response.json();
        if (resData.success === false) {
            throw new Error(resData.message)
        }
        dispatch({ type: GET_PRODUCTS, products: resData.products });
    }
}