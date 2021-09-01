import {ADD_PRODUCT, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE, DELETE_PRODUCT, UPDATE_PRODUCT} from './productTypes'
const initialState = {
    loading: false,
    products: [],
    error: ''
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload,
                error: ''
            }
        case FETCH_PRODUCTS_FAILURE:
            return {
                loading: false,
                products: [],
                error: action.payload
            }
            case DELETE_PRODUCT:
                return {
                    ...state,
                    products: state.products.filter((products) => products._id !== action.payload)
                }
            case UPDATE_PRODUCT:
                return {
                    ...state,
                    products: state.products.map((products)=> products._id === action.payload._id ? action.payload : products  )
                }
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload],
            }
        default: return state
    }
}
export default reducer