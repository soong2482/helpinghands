import axios from 'axios';
import { LOGIN_USER, REGISTER_USER, AUTH_USER,UPLOAD_REPAIR,APPLICATION_REPAIR,REQUIRE_HELP} from './types';
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