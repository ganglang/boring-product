import * as actions from '../actionTypes';
//import { message } from 'antd/es/message';
//import 'antd/es/message/style';
import { message } from 'antd';
import { resolve } from 'dns';
import { reject } from 'q';
export const loginIn = (callback) => {
    return dispatch => {
        setTimeout(() => {
            window.localStorage.setItem("login", true);
            dispatch({
                type: actions.LOGIN_IN
            });
            message.info('登录成功', 2);
            callback();
        }, 500)
    }
}

export const loginOut = () => {
    return dispatch => {
        setTimeout(() => {
            window.localStorage.setItem('login', false);
            dispatch({
                type: actions.LOGIN_OUT
            });
            message.info('已退出登录', 3);
        }, 500)
    }
}