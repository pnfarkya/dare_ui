import axios from "axios";
import { request } from "http";
import { ApiBaseUri } from '../../config';

export async function createUserProfile(request) {

    var res = await axios.post(`${ApiBaseUri}/createUser`, request);

    return res.data;
}