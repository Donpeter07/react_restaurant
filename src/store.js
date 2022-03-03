import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {restaurantListReducer} from './reducers/restaurantReducer'

const reducers = combineReducers({
    restaurantReducer : restaurantListReducer
})

const initialState = {}
const middleware = [thunk]

const store = createStore(reducers,initialState,applyMiddleware(...middleware))

export default store