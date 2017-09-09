import { FETCH_START, FETCH_END, FETCH_ERROR, FETCH_CANCEL } from '../actions/fetchActions';
import { USER_LOGIN_LOADING, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, USER_REGISTER_LOADING, USER_REGISTER_SUCCESS, USER_REGISTER_FAILURE } from '../actions/authActions';

export default (previousState = 0, { type }) => {
    switch (type) {
    case FETCH_START:
    case USER_LOGIN_LOADING:
    case USER_REGISTER_LOADING:
        return previousState + 1;
    case FETCH_END:
    case FETCH_ERROR:
    case FETCH_CANCEL:
    case USER_LOGIN_SUCCESS:
    case USER_LOGIN_FAILURE:
    case USER_REGISTER_SUCCESS:
    case USER_REGISTER_FAILURE:
        return Math.max(previousState - 1, 0);
    default:
        return previousState;
    }
};
