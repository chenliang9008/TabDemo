/**
 * Created by chenliang on 2018/3/1.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    BackHandler
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {setStatusBar, showToast} from "../Util/Utils";
import Tool from "../Common/Constant";
import NavigationHeaderView from "../Widget/NavigationHeaderView";

let lastClickTime = (new Date()).valueOf();
class HomePage extends Component {

    render() {
        return (
            <View style={styles.container}>

                <NavigationHeaderView middleTitle={'Home Page'}/>

                {setStatusBar()}

                <TouchableOpacity onPress={()=>Actions.push('welcome')}>
                    <Text style={styles.welcome}>
                        Home page Info
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    componentDidMount() {
        console.log('HomePage init ')
        if (Tool.isAndroid) BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid)
    }

    componentWillUnmount() {
        console.log('HomePage unmout ')
        this.listener && this.listener.remove();
    }

    onBackAndroid = () => {
        this.listener = BackHandler.addEventListener('hardwareBackPress', function () {
            if (Actions.state.index !== 0) {
                lastClickTime = (new Date()).valueOf();
                return false
            } else {
                let nowTime = (new Date()).valueOf();
                if (nowTime - lastClickTime < 1000) {//间隔时间小于1秒才能退出
                    Actions.pop();
                } else {
                    showToast('再按一次退出应用')
                    lastClickTime = nowTime;
                    return true;
                }
            }
            return false;
        });
    };
}

export default HomePage;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

