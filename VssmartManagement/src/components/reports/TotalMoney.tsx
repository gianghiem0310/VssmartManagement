import React from "react";
import { StyleSheet, Text, View } from "react-native";
const TotalMoney: React.FC<{ type: number }> = ({ type }) => {
    return (
        <View style={{
            ...styles.main, backgroundColor: type===1?'#E6FFFB':'#FFF7E6',
            borderColor: type===1?'#87E8DE':'#FFD591',
        }}>
            <View style={styles.viewText}>
                <Text style={{...styles.text,color:type===1?'#13C2C2':'#FA8C16'}}>{type===1?"Ứng tiền mặt":"Xăng"}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    main: {
        height: 22,
        borderRadius: 2,
        borderWidth: 1,
        paddingTop: 1,
        paddingBottom: 1,
        paddingLeft: 8,
        paddingRight: 8,
        gap: 3,
        flexDirection: 'row',

        justifyContent: 'center',
        alignItems: 'center',
    },
    viewText: {
        height: 22,
        justifyContent: 'center'
    },
    text: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 20,
        textAlign: 'center',
    }
})

export default TotalMoney;