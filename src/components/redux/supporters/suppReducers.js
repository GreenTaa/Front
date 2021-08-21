import {ADD_SUPPORTER} from './suppTypes'
const initialState = {
    loading: false,
    supporters: [],
    error: ''
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SUPPORTER:
            return {
                ...state,
                supporters: [...state.supporters, action.payload],
            }


        default: return state
    }
}
export default reducer