import {combineReducers} from 'redux'
import SupporterReducer from './supporters/suppReducers'
import TeamReducer from './teams/teamReducers'
import CenterReducer from './collectCenters/centerReducers'

const rootReducer = combineReducers({
    supporters : SupporterReducer,
    teams: TeamReducer,
    centers: CenterReducer
})

export default rootReducer