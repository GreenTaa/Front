import {combineReducers} from 'redux'
import SupporterReducer from './supporters/suppReducers'
import TeamReducer from './teams/teamReducers'
import CenterReducer from './collectCenters/centerReducers'
import UserReducer from './connect/connectReducers'

const rootReducer = combineReducers({
    supporters : SupporterReducer,
    teams: TeamReducer,
    centers: CenterReducer,
    connectedUser : UserReducer
})

export default rootReducer