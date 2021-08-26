import {ADD_SUPPORTER, FETCH_SUPPORTERS_REQUEST, FETCH_SUPPORTERS_SUCCESS, FETCH_SUPPORTERS_FAILURE, DELETE_SUPPORTER, UPDATE_SUPPORTER} from './suppTypes'
const initialState = {
    loading: false,
    supporters: [],
    error: ''
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SUPPORTERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_SUPPORTERS_SUCCESS:
            return {
                loading: false,
                supporters: action.payload,
                error: ''
            }
        case FETCH_SUPPORTERS_FAILURE:
            return {
                loading: false,
                supporters: [],
                error: action.payload
            }
            case DELETE_SUPPORTER:
                return {
                    ...state,
                    supporters: state.supporters.filter((supporters) => supporters._id !== action.payload)
                }
            case UPDATE_SUPPORTER:
                return {
                    ...state,
                    supporters: state.supporters.map((supporters)=> supporters._id === action.payload._id ? action.payload : supporters  )
                }
        case ADD_SUPPORTER:
            return {
                ...state,
                supporters: [...state.supporters, action.payload],
            }
        default: return state
    }
}
export default reducer