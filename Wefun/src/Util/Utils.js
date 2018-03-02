/**
 * Created by chenliang on 2018/3/2.
 */

import Toast from "react-native-root-toast";
import {positions} from "react-native-root-toast/lib/ToastContainer";
import Tool from "../Common/Constant";
import {StatusBar} from "react-native";

let toast = null;

export function showToast(msg) {//显示Toast
    if (toast) {//隐藏已经存在的
        Toast.hide(toast);
    }
    toast = Toast.show(msg, {animation: true, position: positions.CENTER});
}

export function showLog(dataStr) { //打印日志
    console.log("===请求参数===", dataStr);
}

//设置状态栏颜色
export function setStatusBar() {
    if (Tool.isAndroid){
        StatusBar.setBackgroundColor('#00A0F0')
    }else{
        StatusBar.setBarStyle('light-content')
    }
}
