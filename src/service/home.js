import {get } from './fetch';

const url = '/api/toutiao/index'

export function getNews(data) {
    return get(url, data);
}