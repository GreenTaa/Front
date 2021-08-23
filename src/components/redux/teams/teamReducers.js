import {ADD_TEAM, FETCH_TEAMS_FAILURE, FETCH_TEAMS_REQUEST, FETCH_TEAMS_SUCCESS} from './teamTypes'
const initialState = {
    loading: false,
    teams: [],
    error: ''
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TEAMS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_TEAMS_SUCCESS:
            return {
                loading: false,
                teams: action.payload,
                error: ''
            }
        case FETCH_TEAMS_FAILURE:
            return {
                loading: false,
                teams: [],
                error: action.payload
            }
        case ADD_TEAM:
            return {
                ...state,
                teams: [...state.teams, action.payload],
            }
        default: return state
    }
}
export default reducer