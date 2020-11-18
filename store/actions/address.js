import { VARIABLES } from "../../constants/appConstants";

export const ADD_ADDRESS = 'ADD_ADDRESS';
export const GET_ADDRESS = 'GET_ADDRESS';





export const addAddress = (address,label) => {
    return async (dispatch,getState)=>{
        const userId = getState().auth.user.userId;
        const response = await fetch(`${VARIABLES.serverUrl}/address/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: userId,
                address:address,
                label:label
            })
        });
        const responseData = response.json();
        console.log(responseData)
        if (responseData.success === false) {
            throw new Error(resData.message)
        }
        dispatch({ type: ADD_ADDRESS})
    }
}



export const getAddress = () => {
    return async (dispatch,getState) => {
        const userId = getState().auth.user.userId;
        console.log(userId)
        const response = await fetch(`${VARIABLES.serverUrl}/address/specific`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    userId:userId
                })
            });
            if(!response.ok){
                return;
            }
        const resData = await response.json();
        console.log(resData)
        if (resData.success === false) {
            throw new Error(resData.message)
        }
        dispatch({ type: GET_ADDRESS, address: resData.Address });
    }
}