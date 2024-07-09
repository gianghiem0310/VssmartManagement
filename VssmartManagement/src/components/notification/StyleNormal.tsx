import React from "react";
import { StyleSheet, Text } from "react-native";
const StyleNormal:React.FC<{data:string}> = ({data})=>{
    return (
        <Text style = {styles.text}>
            {data}
        </Text>
    );
}
const styles = StyleSheet.create({
    text:{
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 24,
        color: '#000000D9',
    }
})
export default StyleNormal;