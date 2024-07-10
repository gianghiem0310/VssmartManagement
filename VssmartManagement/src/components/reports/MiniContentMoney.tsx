import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TotalOrder from "./TotalOrder";
import TotalMoney from "./TotalMoney";
const MiniContentMoney:React.FC<{title:string,data:string, type:number}> = ({title,data,type}) => {
    return (
        <View style={styles.main}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.viewData}>
                <Text style={styles.data}>{data}</Text>
                <TotalMoney type={type}/>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    main:{
        flex: 1,
        width: '50%',
        minHeight: 46
    },
    title:{
        height: 20,
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 20,
        color: '#00000073',
    },
    viewData:{
        height: 'auto',
        paddingTop: 2,
        paddingBottom: 2,
        flexDirection:'row',
        gap: 4,
        flexWrap: 'wrap'
    },
    data:{
        height: 'auto',
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 22,
        color: '#000000D9',
    }
})

export default MiniContentMoney;