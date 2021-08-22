import {ADD_CENTER} from './centerTypes'
const initialState = {
    loading: false,
    centers: [],
    error: ''
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CENTER:
            return {
                ...state,
                centers: [...state.centers, action.payload],
            }


        default: return state
    }
}
export default reducer