import { IAuthData } from 'Models/types';
import { ActionType } from 'redux/actionTypes';

interface loginAction {
    type: ActionType.LOGIN;
    payload: IAuthData;
}
interface logoutAction {
    type: ActionType.LOGOUT;
    payload: string;
}

export type AuthAction = loginAction | logoutAction;
