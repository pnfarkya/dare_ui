import axios from "axios";
import { request } from "http";
import { ApiBaseUri } from '../../config';

export async function createUserProfile(request) {

    var res = await axios.post(`${ApiBaseUri}/createUser`, request);

    return res.data;
}

export async function userSignIn(request) {
    const uri = `http://localhost:8000/dare/login`;
    console.log(uri);
    var res = await axios.postForm(uri, request)

    if (res.status == '403') {
        alert(res.data);
    }
    else {
        localStorage.setItem('userToken', res.data.token)
        window.location.href = '/userProfile';
    }
}