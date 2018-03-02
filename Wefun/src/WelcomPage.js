/**
 * Created by chenliang on 2018/3/1.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View
} from 'react-native';
import {Actions} from 'react-native-router-flux';
var Dimensions = require('Dimensions');
var {width, height}=Dimensions.get('window');

class WelcomPage extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./Images/welcome/img_launcher.jpg')} style={styles.imageStyle}/>
            </View>
        );
    }

    componentDidMount() {
        this.isLoginedIn()
    }


    isLoginedIn =()=>{
        setTimeout(()=>{
            if (true){
                Actions.pop();
                Actions.reset('main')
            }else{
                Actions.reset('login');
            }
        },2000)
    }

}
export default WelcomPage;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    imageStyle:{
        width:width,
        height:height
    }
});

