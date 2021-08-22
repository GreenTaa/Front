import {combineReducers} from 'redux'
import SupporterReducer from './supporters/suppReducers'
import TeamReducer from './teams/teamReducers'

const rootReducer = combineReducers({
    supporters : SupporterReducer,
    teams: TeamReducer
})

export default rootReducer