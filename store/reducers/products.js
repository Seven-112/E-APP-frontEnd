import PRODUCTS from '../../Data/DummyProducts';
import { GET_PRODUCTS } from '../actions/products';



const intitialState = {
    availableProducts: [],
    hotSales: [],
    promotions: []
}

export default (state = intitialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                availableProducts: action.products,
                hotSales: action.products.filter(item => item.hotsales === true),
                promotions: action.products.filter(item => item.promotions === true)

            }

    }
    return state
}