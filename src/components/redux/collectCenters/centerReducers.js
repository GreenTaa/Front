import {ADD_CENTER, FETCH_CENTERS_REQUEST, FETCH_CENTERS_SUCCESS, FETCH_CENTERS_FAILURE, DELETE_CENTER, UPDATE_CENTER} from './centerTypes'
const initialState = {
    loading: false,
    centers: [],
    error: ''
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CENTERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_CENTERS_SUCCESS:
            return {
                loading: false,
                centers: action.payload,
                error: ''
            }
        case FETCH_CENTERS_FAILURE:
            return {
                loading: false,
                centers: [],
                error: action.payload
            }
            case DELETE_CENTER:
                return {
                    ...state,
                    centers: state.centers.filter((centers) => centers._id !== action.payload)
                }
            case UPDATE_CENTER:
                return {
                    ...state,
                    centers: state.centers.map((centers)=> centers._id === action.payload._id ? action.payload : centers  )
                }
        case ADD_CENTER:
            return {
                ...state,
                centers: [...state.centers, action.payload],
            }
        default: return state
    }
}
export default reducer