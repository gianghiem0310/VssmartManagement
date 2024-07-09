import { IconOutline } from "@ant-design/icons-react-native";
import { Button } from "@ant-design/react-native";
import React from "react";
import { StyleSheet, View, Dimensions, Text } from "react-native";
import { TouchableOpacity } from "react-native";
const { width } = Dimensions.get('window');
type InputProps = {
    background: string,
    height: number,
}
const RowTitle = ({ background, height }: InputProps) => {
    return (
        <View style={{ ...styles.row, height: height, backgroundColor: background }}>
            <View style={styles.col1}>
                <Text style={styles.textTitle}>STT</Text>
            </View>
            <View style={styles.divider}/>
            <View style={styles.col2}>
                <Text style={styles.textTitle}>Tên Sản Phẩm</Text>
            </View>
            <View style={styles.divider}/>
            <TouchableOpacity style={styles.col3}>
                <Text style={styles.textTitle}>Sắp xếp</Text>
                <View style={styles.sort}>
                    <IconOutline name="caret-up" size={11}/>
                    <IconOutline name="caret-down" size={11}/>
                </View>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    row: {
        backgroundColor: 'yellow',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#0000000F',
        borderBottomWidth: 1
    },
    divider:{
        width:1,
        height:22,
        backgroundColor:'#0000000F'
    },
    col1: {
        width: '15%',
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 8
    },

    col2: {
        width: '55%',
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 8
    },
    col3: {
        width: '30%',
        height: '100%',
        alignItems: 'flex-start',
        padding: 8,
        flexDirection: 'row',
        alignContent: 'center',
        gap: 8,
        justifyContent: 'space-between'
    },
    sort:{
        width:11,
        height: 22,
    },

    textTitle:{
        fontFamily:'Roboto',
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 22,
        color: '#000000D9'
    },
})
export default RowTitle;