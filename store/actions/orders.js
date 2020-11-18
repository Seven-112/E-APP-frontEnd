import { VARIABLES } from "../../constants/appConstants";
import Order from "../../Model/Order";
import orderProducts from "../../Model/orderProduct";
export const GET_ORDERS = 'GET_ORDERS';
export const POST_ORDERS = 'POST_ORDERS';




export const getOrders = () => {
    return async (dispatch, getState) => {
        const userId = getState().auth.user.userId
        console.log(userId, "inside getOrders")
        const response = await fetch(`${VARIABLES.serverUrl}/order/specific`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: userId
            })
        });
        const responseData = await response.json()
   
        if (responseData.success === false) {
            throw new Error(resData.message)
        }
        const loadedOrders = [];
        const loadedOrderProducts = [];
        for (let i = 0; i < responseData.orders.length; i++) {
            console.log(responseData.orders.length)
            loadedOrderProducts.length = 0
            let childArray = responseData.orders[i].products[0];
            for (const key in childArray) {
                console.log(childArray[key])
                     loadedOrderProducts.push(
                    new orderProducts(
                        childArray[key].id,
                        childArray[key].price,
                        childArray[key].quantity,
                        childArray[key].name
                    )
                )
              
            }
            // for (let j = 0; j < childArray.length; j++) {
            //     console.log("inner length", responseData.orders[i].products[0].length)
            //     console.log(childArray[j])
            //     console.log(responseData.orders[i].products[0])
            //     loadedOrderProducts.push(
            //         new orderProducts(
            //             responseData.orders[i].products[0].productId,
            //             responseData.orders[i].products[0].quantity,
            //             responseData.orders[i].products[0].unitPrice,
            //             responseData.orders[i].products[0].name
            //         )
            //     )
            // }
            loadedOrders.push(
                new Order(
                    responseData.orders[i].orderId,
                    responseData.orders[i].userId,
                    responseData.orders[i].address,
                    responseData.orders[i].date,
                    responseData.orders[i].total,
                    responseData.orders[i].discount,
                    loadedOrderProducts
                )
            )
        }
        dispatch({ type: GET_ORDERS, orders: loadedOrders })
    }
}


export const postOrders = (total, discount, delieveryFee, address) => {
    return async (dispatch, getState) => {
        const userId = getState().auth.user.userId;
        const products = getState().cart.cartItems;
        console.log("INSIDE ORDERS",products)
        const response = await fetch(`${VARIABLES.serverUrl}/order/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: userId,
                products: products,
                total: total,
                discount: discount,
                delieveryFee: delieveryFee,
                address: address
            })
        });
        const responseData = response.json();
        if (responseData.success === false) {
            throw new Error(resData.message)
        }

     
        dispatch({ type: POST_ORDERS });
      
    }
}