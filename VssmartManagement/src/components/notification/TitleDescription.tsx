import React from "react";
import { StyleSheet, Text, View } from "react-native";
const TitleDescription:React.FC<{title:string,data:string,date:string}> = ({title,data,date}) => {
    return (
        <View style= {styles.main}><Text style = {styles.text}>{title}</Text><Text style = {styles.data}>{data}</Text><Text style = {styles.text}>{date}</Text></View>
    );
}
const styles = StyleSheet.create({
    main:{
        flexDirection:'row'
    },
    text:{
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 22,
        color: '#000000D9'
    },
    data:{
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 22,
        color: '#000000D9'
    }
})
export default TitleDescription;