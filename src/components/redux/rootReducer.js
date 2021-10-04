import {combineReducers} from 'redux'
import SupporterReducer from './supporters/suppReducers'
import TeamReducer from './teams/teamReducers'
import CenterReducer from './collectCenters/centerReducers'
import UserReducer from './connect/connectReducers'
import WhishlistReducer from './whishlist/whishlistReducers'

const rootReducer = combineReducers({
    supporters : SupporterReducer,
    teams: TeamReducer,
    centers: CenterReducer,
    connectedUser : UserReducer,
    whishlists : WhishlistReducer
})

export default rootReducer