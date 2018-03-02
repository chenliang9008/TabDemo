/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Scene, Router,Actions} from 'react-native-router-flux';

import TabIcon from './src/Tab/TabIcon';
import HomePage from "./src/Home/HomePage";
import MessagePage from "./src/Message/MessagePage";
import MinePage from "./src/Mine/MinePage";
import OrderPage from "./src/Order/OrderPage";
import WelcomPage from "./src/WelcomPage";



const scenes = Actions.create(

    <Scene key="root" swipeEnabled={false} animationEnabled={false} hideNavBar>

      <Scene key="welcome" component={WelcomPage} initial/>

      <Scene key="main" type='replace' tabBarPosition='bottom' tabs lazy>
          <Scene key="home" component={HomePage} hideNavBar
                 icon={TabIcon}
                 Image={require('./src/Images/pfb_tabbar_homepage.png')}
                 selectedImage={require('./src/Images/pfb_tabbar_homepage_selected.png')}
                 tabBarOnPress={()=>App.tabBarOnPress(0)}
          />
          <Scene key="message" component={MessagePage} hideNavBar
                 icon={TabIcon}
                 Image={require('./src/Images/pfb_tabbar_merchant.png')}
                 selectedImage={require('./src/Images/pfb_tabbar_merchant_selected.png')}
                 tabBarOnPress={()=>App.tabBarOnPress(1)}
          />

          <Scene key="order" component={OrderPage} hideNavBar
                 icon={TabIcon}
                 Image={require('./src/Images/pfb_tabbar_order.png')}
                 selectedImage={require('./src/Images/pfb_tabbar_order_selected.png')}
                 tabBarOnPress={()=>App.tabBarOnPress(2)}
          />

          <Scene key="mine" component={MinePage} hideNavBar
                 icon={TabIcon}
                 Image={require('./src/Images/pfb_tabbar_mine.png')}
                 selectedImage={require('./src/Images/pfb_tabbar_mine_selected.png')}
                 tabBarOnPress={()=>App.tabBarOnPress(3)}
          />

      </Scene>

    </Scene>
);


export default class App extends Component<> {

    render() {
        return (<Router scenes={scenes}/>);
    }

    static tabBarOnPress = (tabIndex) => {
        console.log(tabIndex)
        switch (tabIndex){
          case 0: Actions.jump('home')
              break;
          case 1: Actions.jump('message')
              break;
          case 2: Actions.jump('order')
              break;
          case 3: Actions.jump('mine')
              break;
        }
    }
}

