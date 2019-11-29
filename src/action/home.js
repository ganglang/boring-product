import * as actions from '../actionTypes';
import { getNews } from '../service/home'

export const getNewss = (data) => {
    return dispatch => {
        getNews(data).then(res => {
            let _res = res;
            if (_res.data.result.stat == '1') {
                //console.log("action6767:" + JSON.stringify(_res.data.result.data));
                dispatch({
                    type: actions.GET_NEWS,
                    news: _res.data.result.data
                })
            } else {
                alert(JSON.stringify(res));
            }
        }).catch(err => { alert(err); })
    }
}