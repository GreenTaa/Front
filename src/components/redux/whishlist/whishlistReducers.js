import {ADD_WHISHLIST, FETCH_WHISHLISTS_REQUEST, FETCH_WHISHLISTS_SUCCESS, FETCH_WHISHLISTS_FAILURE, DELETE_WHISHLIST, UPDATE_WHISHLIST} from './whishlistTypes'
const initialState = {
    loading: false,
    whishlists: [],
    error: ''
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_WHISHLISTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_WHISHLISTS_SUCCESS:
            return {
                loading: false,
                whishlists: action.payload,
                error: ''
            }
        case FETCH_WHISHLISTS_FAILURE:
            return {
                loading: false,
                whishlists: [],
                error: action.payload
            }
            case DELETE_WHISHLIST:
                return {
                    ...state,
                    whishlists: state.whishlists.filter((whishlists) => whishlists._id !== action.payload)
                }
            case UPDATE_WHISHLIST:
                return {
                    ...state,
                    whishlists: state.whishlists.map((whishlists)=> whishlists._id === action.payload._id ? action.payload : whishlists  )
                }
        case ADD_WHISHLIST:
            return {
                ...state,
                whishlists: [...state.whishlists, action.payload],
            }
        default: return state
    }
}
export default reducer