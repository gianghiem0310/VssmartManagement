import React from "react";
import { StyleSheet, View, Dimensions, Text } from "react-native";
type InputProps = {
    data?: string[],
    background: string,
    height: number,
}
const Row = ({ data, background, height }: InputProps) => {
    return (
        <View style={{ ...styles.row,height: height, backgroundColor: background }}>
            <View style={styles.col1}>
                <Text style={styles.textTitle}>{data && data[0]}</Text>
            </View>
            <View style={styles.col2}>
                <Text style={styles.textTitleBlue}>{data && data[1]}</Text>
            </View>
            <View style={styles.col3}>
                <Text style={styles.textTitle}>{data && data[2]}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    row: {
        backgroundColor: 'yellow',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderTopColor: '#0000000F',
        borderTopWidth: 1,
     
    },
    col1: {
        width: '15%',
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 8,
        color: '#000000D9'

    },
    col2: {
        width: '55%',
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 8,
      
    },
    col3: {
        width: '30%',
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 8,
        color: '#000000D9'
    },
    textTitle:{
        fontFamily:'Roboto',
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 22,
        color: '#000000D9'
    },
    textTitleBlue:{
        fontFamily:'Roboto',
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 22,
        color: '#1890FF'
    },
})
export default Row;