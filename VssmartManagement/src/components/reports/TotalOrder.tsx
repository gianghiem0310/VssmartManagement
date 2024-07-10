import React from "react";
import { StyleSheet, Text, View } from "react-native";
const TotalOrder:React.FC<{order:number}> = ({order}) => {
    return (
        <View style={styles.main}>
            <View style={styles.viewText}>
            <Text style={styles.text}>{order+" "}Đơn</Text>
            </View>
           
        </View>
    );
}
const styles = StyleSheet.create({
    main:{
        height:22,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#B7EB8F',
        paddingTop: 1,
        paddingBottom: 1,
        paddingLeft: 8,
        paddingRight: 8,
        gap: 3,
        flexDirection: 'row',
        backgroundColor:'#F6FFED',
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    viewText:{
        height: 22,
        justifyContent: 'center'
    },
    text:{
        fontFamily:'Roboto',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 20,
        color: '#52C41A',
        textAlign: 'center',
    }
})

export default TotalOrder;