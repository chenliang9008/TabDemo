/**
 * Created by chenliang on 2018/3/2.
 */

import axios from 'axios/index';
import {showToast} from "./Utils";

export async function requestData(url, data = {}, callback, loadingDialog, methodPost = false) {
    
    let formData = new FormData();
    if (methodPost) {//后台只提供formData方式发送post请求
        for (let key in data) formData.append(key, data[key]);
    }
    if (loadingDialog) loadingDialog.showDialog();
    let request = methodPost ? axios.post(url, formData) : axios.get(url, {params: data});
    request.then(resp => {
        if (loadingDialog) loadingDialog.dismiss();
        let jData = resp.data;//返回的Json数据
        console.log(`===请求URL===`, axios.defaults.baseURL + url);
        console.log(`===请求参数===`, data);
        console.log(`===请求结果===`, JSON.stringify(jData));
        if (jData && jData.isSuccess) {
            callback && callback(jData);
        } else {
            callback && callback(jData);
            showToast(jData.msg)
        }
    }).catch(error => {
        if (loadingDialog) loadingDialog.dismiss();
        callback && callback({isSuccess: false, msg: error});
        if (error.message.includes('Network Error')) {
            showToast("网络不可用，请检查网络链接");
        } else {
            showToast(error.toString());
        }
    });
}
