import axios from "axios";
import { ApiBaseUri } from '../../config'

export async function getNftDetailsById(id) {
    var response = await axios.get(`${ApiBaseUri}/nft/${id}`)
    return response.data;
}

export async function getAllNft(d) {
    var response = await axios.get(`${ApiBaseUri}/nft`)
    return response.data;
}