import { combineReducers } from 'redux';
import settings from './settings/reducer';
import menu from './menu/reducer';
import authUser from './auth/reducer';
import todoApp from './todo/reducer';
import chatApp from './chat/reducer';
import surveyListApp from './surveyList/reducer';
import surveyDetailApp from './surveyDetail/reducer';
import SupporterReducer from '../components/redux/supporters/suppReducers'
import TeamReducer from '../components/redux/teams/teamReducers'
import CenterReducer from '../components/redux/collectCenters/centerReducers'
import ProductReducer from '../components/redux/products/productReducers'
import WhishlistReducer from '../components/redux/whishlist/whishlistReducers'
import UserReducer from '../components/redux/connect/connectReducers'

const reducers = combineReducers({
  menu,
  settings,
  authUser,
  todoApp,
  chatApp,
  surveyListApp,
  surveyDetailApp,
  supporters : SupporterReducer,
  teams: TeamReducer,
  centers: CenterReducer,
  products: ProductReducer,
  whishlists : WhishlistReducer,
  connectUser : UserReducer
});

export default reducers;