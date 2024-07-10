import React from "react";
import { StyleSheet, Text, View } from "react-native";
const MiniContent:React.FC<{title:string,data:string}> = ({title,data}) => {
    return (
        <View style={styles.main}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.viewData}>
                <Text style={styles.data}>{data}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    main:{
        flex: 1,
        width: '50%',
        minHeight: 46,
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
        gap: 4,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    data:{
        flexShrink: 1,
        flexBasis: 'auto',
        height: 'auto',
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 22,
        color: '#000000D9',
    }
})

export default MiniContent;