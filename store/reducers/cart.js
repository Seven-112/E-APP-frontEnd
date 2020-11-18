import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart"
import CartItem from "../../Model/cartItem";
import { POST_ORDERS } from "../actions/orders";


const initialState = {
    cartItems: {},
    total: 0
}


export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const addedProduct = action.product;
            console.log("ADDED PRODUCT", addedProduct)
            const prodId = addedProduct.id;
            const prodPrice = addedProduct.price;
            const prodName = addedProduct.name;
            const prodQuantity = addedProduct.quantity;
            const prodImage = addedProduct.imageUrl

            let updatedItems

            if (state.cartItems[addedProduct.id]) {
                updatedItems = new CartItem(
                    prodId,
                    prodName,
                    prodPrice,
                    state.cartItems[prodId].quantity + prodQuantity,
                    prodImage,
                    state.cartItems[prodId].sum + (prodPrice * prodQuantity)

                );
            } else {
                updatedItems = new CartItem(prodId, prodName, prodPrice, prodQuantity, prodImage, prodPrice * prodQuantity)
            }
            return {
                ...state,
                cartItems: { ...state.cartItems, [addedProduct.id]: updatedItems },
                total: state.total + (prodPrice * prodQuantity)

            }
        case REMOVE_FROM_CART:
            const selectedCartItem = state.cartItems[action.productId];
            const currentQuantity = selectedCartItem.quantity;
            let updatedorDeletedItems = []
            if (currentQuantity > 1) {
                const updatedCartItem = new CartItem(
                    selectedCartItem.id,
                    selectedCartItem.name,
                    selectedCartItem.price,
                    selectedCartItem.quantity - 1,
                    selectedCartItem.imageUrl,
                    selectedCartItem.sum - selectedCartItem.price
                );
                updatedorDeletedItems = { ...state.cartItems, [action.productId]: updatedCartItem }
            } else {
                updatedorDeletedItems = { ...state.cartItems };
                delete updatedorDeletedItems[action.productId]
            }
            return {
                ...state,
                cartItems: updatedorDeletedItems,
                total: state.total - selectedCartItem.price
            }
        case POST_ORDERS:
            return initialState

    }
    return state
}

// responseData.orders[i].products[j].productId,
//                         responseData.orders[i].products[j].quantity,
//                         responseData.orders[i].products[j].unitPrice,
//                         responseData.orders[i].products[j].name

//                         responseData.orders[i].orderId,
//                         responseData.orders[i].userId,
//                         responseData.orders[i].address,
//                         responseData.orders[i].date,
//                         responseData.orders[i].total,
//                         responseData.orders[i].discount,
//                         loadedOrderProducts