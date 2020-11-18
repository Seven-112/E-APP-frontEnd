import { VARIABLES } from "../../constants/appConstants";
import { AsyncStorage } from 'react-native';
export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';
export const IMAGE_UPLOAD = 'IMAGE_UPLOAD';
export const SIGNUP = 'SIGNUP';
export const SET_DID_TRY_AUTOLOGIN = 'SET_DID_TRY_AUTOLOGIN';
let timer;


export const setDidTryAutoLogin = () => {
    return {
        type: SET_DID_TRY_AUTOLOGIN,
    }
}


export const signup = (name, email, password, profileUrl) => {
    return async dispatch => {


        const response = await fetch(`${VARIABLES.serverUrl}/user/signup`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password,
                    profileImg: profileUrl

                })
            }
        );
        const resData = await response.json();
        console.log(resData)
        if (resData.success === false) {
            throw new Error(resData.message)
        }

        dispatch({ type: SIGNUP })
    }
}

export const authenticate = (user, token, expiryTime) => {
    return dispatch => {
        dispatch(setLogoutTimer(expiryTime));
        dispatch({ type: AUTHENTICATE, user: user, token: token })

    }
}





export const login = (email, password) => {

    console.log(email, password)
    return async dispatch => {
        const response = await fetch(`${VARIABLES.serverUrl}/user/login`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                })
            });

        const resData = await response.json();

        if (resData.success === false) {
            throw new Error(resData.message)
        }
        console.log("saving", resData.token)
        let token = resData.token
        const expirationDate = new Date(new Date().getTime() + parseInt(resData.expiresIn) * 1000);
        saveDatatoStorage(resData.user, token, expirationDate);
        dispatch(authenticate(resData.user, resData.token, parseInt(resData.expiresIn) * 1000));

    }
}




export const ImageUplaod = (profileUrl) => {


    const formData = new FormData()
    console.log(profileUrl)
    formData.append("file", { uri: profileUrl, name: 'image.jpg', type: 'image/jpeg' })
    console.log(profileUrl)
    return async dispatch => {
        const response = await fetch(`${VARIABLES.serverUrl}/storage`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                body: formData
            }
        );

        const resData = await response.json();

        if (resData.success === false) {
            throw new Error(resData.message)
        }
        console.log(resData)
        return resData

    }
}


export const forgetPassword = (email, password) => {

    console.log(email, password)
    return async dispatch => {
        const response = await fetch(`${VARIABLES.serverUrl}/user/forgetPassword`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                })
            }
        );

        const resData = await response.json();
        console.log(resData)
        if (resData.success === false) {
            throw new Error(resData.message)
        }
        console.log(resData)
    }
}

export const logout = () => {
    clearLogoutTimer();
    AsyncStorage.removeItem('userData');
    return { type: LOGOUT };
}


const clearLogoutTimer = () => {
    if (timer) {
        clearInterval(timer);
    }
}

const saveDatatoStorage = (user, token, expirationDate) => {
    AsyncStorage.setItem('userData', JSON.stringify({
        user: user,
        token: token,
        expiryDate: expirationDate.toISOString()
    }))
}

const setLogoutTimer = expirationTime => {
    return dispatch => {
        timer = setTimeout(() => {
            dispatch(logout());
        }, expirationTime)
    }
}