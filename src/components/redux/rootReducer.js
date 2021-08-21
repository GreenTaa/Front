import {combineReducers} from 'redux'
import SupporterReducer from './supporters/suppReducers'

const rootReducer = combineReducers({
    supporters : SupporterReducer
})

export default rootReducer