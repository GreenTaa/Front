import {ADD_TEAM} from './teamTypes'
const initialState = {
    loading: false,
    teams: [],
    error: ''
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TEAM:
            return {
                ...state,
                teams: [...state.teams, action.payload],
            }


        default: return state
    }
}
export default reducer