import React from "react";
import { StyleSheet, View,Dimensions } from "react-native";
const { width } = Dimensions.get('window');
const Header = () => {
    return (
        <View style={styles.header}>
                
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        height: 20,                   // 20 pixels
        width: width,                 // chiều rộng bằng màn hình
        backgroundColor: 'blue',      // màu nền xanh
    }
})
export default Header;