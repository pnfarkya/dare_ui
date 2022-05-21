import axios from "axios";

export async function getCollection(collectionId) {
    var response = await axios.get(`collection/${collectionId}`);
    return response.data;
}