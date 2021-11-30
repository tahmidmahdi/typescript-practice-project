import { IAuthData } from 'Models/types';
import { AuthAction } from 'redux/actions/authAction';
import { ActionType } from 'redux/actionTypes';

const AuthReducer = (
    state: IAuthData | null = null,
    action: AuthAction
): IAuthData | null => {
    switch (action.type) {
        case ActionType.LOGIN: {
            return action.payload;
        }

        case ActionType.LOGOUT: {
            return null;
        }

        default:
            return state;
    }
};

export default AuthReducer;
