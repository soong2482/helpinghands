import axios from 'axios';
import { LOGIN_USER, REGISTER_USER, AUTH_USER,UPLOAD_REPAIR,APPLICATION_REPAIR,REQUIRE_HELP,REQUIRE_LIST,DATA_REQUIRE,SUCCESS_DATA,USERDATA_REQUIRE} from './types';
export function loginUser(dataToSubmit) {

    const request = axios.post('/api/users/login', dataToSubmit)
        .then(response => response.data)

    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function registerUser(dataToSubmit) {

    const request = axios.post('/api/users/register', dataToSubmit)
        .then(response => response.data)

    return {
        type: REGISTER_USER,
        payload: request
    }
}

export function repairUpload(dataToSubmit) {

    const request = axios.post('/api/repair/upload', dataToSubmit)
        .then(response => response.data)

    return {
        type: UPLOAD_REPAIR,
        payload: request
    }
}

export function repairApplication(dataToSubmit) {

    const request = axios.post('/api/repair/application', dataToSubmit)
        .then(response => response.data)

    return {
        type: APPLICATION_REPAIR,
        payload: request
    }
}
export function auth() {

    const request = axios.get('/api/users/auth')
        .then(response => response.data)

    return {
        type: AUTH_USER,
        payload: request
    }
}
export function required(dataToSubmit){
    const request = axios.post('/api/help/require', dataToSubmit)
         .then(response => response.data)
    return {
        type: REQUIRE_HELP,
        payload: request
    }
}
export function requiredList(dataToSubmit){
    const request = axios.post('/api/help/list', dataToSubmit)
         .then(response => response.data)
    return {
        type: REQUIRE_LIST,
        payload: request
    }
}
export function datarequire(dataToSubmit){
    const request = axios.post('/api/repair/dataList',dataToSubmit)
          .then(response => response.data)
    return {
        type: DATA_REQUIRE,
        payload: request
    }
}
export function userdatarequire(dataToSubmit){
    const request = axios.post('/api/help/userdatarequire',dataToSubmit)
          .then(response => response.data)
    return {
        type: USERDATA_REQUIRE,
        payload: request
    }
}
export function successdata(dataToSubmit){
    const request = axios.post('/api/help/success',dataToSubmit)
          .then(response => response.data)
    return {
        type: SUCCESS_DATA,
        payload: request
    }
}