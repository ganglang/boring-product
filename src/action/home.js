import * as actions from '../actionTypes';
import { getNews } from '../service/home'

export const getNewss = (data = { type: 'top' }) => {
    return dispatch => {
        getNews(data).then(res => {
            let _res = res;
            if (_res.result.stat == '1') {
                dispatch({
                    type: actions.GET_NEWS,
                    news: _res.result.data
                })
            }
        }).catch(err => {})
    }

}