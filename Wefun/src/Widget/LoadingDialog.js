import React, {PureComponent} from 'react';
import {
    Modal,
    Text,
    View,
    StyleSheet,
    BackHandler,
    DeviceEventEmitter,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';
import Const from "../common/Const";
import PropTypes from 'prop-types';
import Colors from "../common/Colors";
import Size from "../common/Size";
import {BallIndicator} from "react-native-indicators";

export default class LoadingDialog extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            isShow: false
        };
    }

    static propTypes = {
        text: PropTypes.string, //内容
    };

    static defaultProps = {
        text: '加载中,请稍候...',
    };

    showDialog() {
        this.setState({isShow: true});
        BackHandler.addEventListener('hardwareBackPress', () => {
            this.dismiss()
        });
    }

    dismiss() {
        this.setState({isShow: false});
        BackHandler.removeEventListener('hardwareBackPress', () => {
        });
    };

    render() {
        let {text} = this.props;
        return <Modal transparent={true}
                      visible={this.state.isShow}
                      animationType='fade'
                      onRequestClose={() => {
                      }}>
            <View style={styles.winBg}>
                <View style={styles.dialogBg}>
                    <BallIndicator color='gray' size={26} animationDuration={800}/>
                    <Text style={styles.content}>{text}</Text>
                </View>
            </View>
        </Modal>
    }
}

const styles = StyleSheet.create({
    winBg: {  //全屏显示 半透明 可以看到之前的控件但是不能操作了
        flex: 1,
        width: Const.screen_width,
        height: Const.screen_height,
        backgroundColor: 'rgba(0,0,0,0.6)', //半透明度
        justifyContent: 'center',
        alignItems: 'center',
    },
    dialogBg: {
        width: 180,
        height: 90,
        backgroundColor: Colors.white,
        borderRadius: Size.space_micro,
        borderColor: Colors.white,
        borderWidth: 3,
    },
    content: {
        textAlign: 'center',
        fontSize: Size.text_smallest,
        color: Colors.text_lighter,
        paddingBottom: Size.space_biggest,
    }
});