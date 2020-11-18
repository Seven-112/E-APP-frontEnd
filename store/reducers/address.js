import { ADD_ADDRESS, GET_ADDRESS } from "../actions/address";


const initialState = {

    address: []
}


export default (state = initialState, action) => {

    switch (action.type) {
        case ADD_ADDRESS:
            return {
                ...state,
            }
        case GET_ADDRESS:
            return {
                address:action.address
            }
    }
    return state;
}