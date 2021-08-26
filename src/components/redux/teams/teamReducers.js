import {ADD_TEAM, FETCH_TEAMS_FAILURE, FETCH_TEAMS_REQUEST, FETCH_TEAMS_SUCCESS, DELETE_TEAM, UPDATE_TEAM} from './teamTypes'
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
            case DELETE_TEAM:
                return {
                    ...state,
                    teams: state.teams.filter((teams) => teams._id !== action.payload)
                }
            case UPDATE_TEAM:
                return {
                    ...state,
                    teams: state.teams.map((teams)=> teams._id === action.payload._id ? action.payload : teams  )
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