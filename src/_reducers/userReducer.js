import { SUCCESS_DATA,DATA_REQUIRE,LOGIN_USER, REGISTER_USER, AUTH_USER, UPLOAD_REPAIR,APPLICATION_REPAIR,REQUIRE_HELP,REQUIRE_LIST, USERDATA_REQUIRE} from '../_actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload }
            break;
        case REGISTER_USER:
            return { ...state, register: action.payload }
            break;
        case AUTH_USER:
            return { ...state, userData: action.payload }
            break;
        case UPLOAD_REPAIR:
            return {...state, upload:action.payload}
            break;
        case APPLICATION_REPAIR:
            return{...state ,application:action.payload}
            break;
        case REQUIRE_HELP:
            return{...state ,required:action.payload}
            break;
        case REQUIRE_LIST:
            return{...state ,required:action.payload}
            break;
        case DATA_REQUIRE:
            return{...state, require:action.payload}
            break;
        case USERDATA_REQUIRE:
            return{...state, userdata:action.payload}
            break;
        case SUCCESS_DATA:
            return{...state, success:action.payload}
            break;
        default:
            return state;
    }
}