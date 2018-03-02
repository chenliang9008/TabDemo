/**
 * Created by chenliang on 2018/3/2.
 */

import { Platform,Dimensions } from 'react-native';

export default Tool={
    isAndroid:Platform.OS==='android'?true:false,
    screenWidth: Dimensions.get('window').width,
    screenHeight: Dimensions.get('window').height
}
