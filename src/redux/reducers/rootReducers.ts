import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    auth: AuthReducer,
});

export type AppType = ReturnType<typeof rootReducer>;

export default rootReducer;
