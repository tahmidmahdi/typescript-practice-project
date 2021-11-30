import { Dispatch } from 'react';
import { AuthAction } from 'redux/actions/authAction';
import { ActionType } from 'redux/actionTypes';
import AuthService from 'services/AuthService';

export const login = (payload: { email: string; password: string }) => {
    // return {
    //     type: ActionType.ADD_TO_CART,
    //     payload,
    // };
    return (dispatch: Dispatch<AuthAction>) => {
        AuthService.login(payload).then((data) => {
            dispatch({
                type: ActionType.LOGIN,
                payload: data,
            });
        });
    };
};

// export const logout = (): CartAction => {
//     return {
//         type: ActionType.CLEAR_CART,
//     };
// };
