//import 'whatwg-fetch';
const axios = require('axios');
const key = 'b57d83c669f89cfd8bcebb2bff84fe28';

/*export const post = (url, data) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}*/

/*export const get = (url, data) => {
    let param = ``;
    let newUrl = url;
    for (let key in data) {
        param += `${key}=${data[key]}&`
    }
    param += `key=${key}`;
    newUrl = newUrl + `?` + param;
    return fetch(newUrl, {
        method: 'GET'
    }).then(res => {
        console.log("fetch-get:" + JSON.stringify(res));
    })
}*/

export const get = (url, data) => {
    let param = ``;
    let newUrl = url;
    for (let key in data) {
        param += `${key}=${data[key]}&`
    }
    param += `key=${key}`;
    newUrl = newUrl + `?` + param;
    return new Promise((resolve, reject) => {
        axios.get(newUrl).then(res => {
            resolve(res);
        })
    })
}