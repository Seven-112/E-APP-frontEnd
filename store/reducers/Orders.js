import { GET_ORDERS, POST_ORDERS } from "../actions/orders"
import Order from "../../Model/Order";
import orderProducts from "../../Model/orderProduct";


const initialState = {
    orders: []
}
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDERS:
            return {
                orders: action.orders
            }
        case POST_ORDERS:
            return {
                ...state,
            }
    }
    return state;
}

