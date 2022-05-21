import axios from 'axios'

export async function getTopAseets() {
    let assets = [];
    const response = await axios.get('https://api.opensea.io/api/v1/assets?limit=25');
    next = response.data.next;
    response.data.assets.map(c => assets.push(c));
    return assets;
}