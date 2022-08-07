import axios, {
    AxiosResponse,
    AxiosStatic
} from 'axios';

import {
    yesterday,
    yesterdayDB
} from "./utils";


// https://gb9fb258fe17506-apexdb.adb.ap-seoul-1.oraclecloudapps.com/ords/twright/v1/twright/logs/:rid


const auth_key = '766614B7C9A901198F2F5630349ADB7A9DAFB63976AF64DBB8A775D3BCCBDDB1'
const DEV = 'https://gb9fb258fe17506-apexdb.adb.ap-seoul-1.oraclecloudapps.com/ords/dataponic/'
const post_url = DEV + 'elogs/weathers'
const get_url  = DEV + 'elogs/weathers'


async function getUidAll(): Promise < any[] > {
    let users: any[] = [];

    console.log(get_url)
    const response:any =  await axios.get(get_url, {
    })
    console.log(response.data)
    return response.data.items
}



async function postApex(upJson: any):Promise < boolean > {
    const request_config = {
        headers: {
            "Content-Type": 'application/json',
            "Authorization": auth_key,
        },
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        data: upJson
    };
    const response = await axios.post(post_url, upJson, request_config);
    console.log(post_url, upJson)
    try {
        if (response.status === 200) { // response - object, eg { status: 200, message: 'OK' }
            console.log(response.data);
            return true;
        }
        return false;
    } catch (err) {
        console.error(err)
        return false;
    }
}

export {
    postApex,
    getUidAll
}