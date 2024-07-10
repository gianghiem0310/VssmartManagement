import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../resource/types";
import CardViewDetailReport from '../components/reports/CardViewDetailReport';
const SalesDetails = () => {

    const [dataReport, setDataReport] = useState([
        {
            id: 1,
            dayTrading: "22/12/2022",
            totalSale: "500,000",
            vat: "10%",
            totalDecrease: "500,000",
            discount: "0",
            totalReturn: "300,0000000000000000000",
            salesRevenue: "300,000",
            debtCollection: "500,000",
            payingGuests: "100,000",
            debtDuringDay: "-200,000",
            order: 20,
        },
        {
            id: 2,
            dayTrading: "22/12/2022",
            totalSale: "500,000",
            vat: "10%",
            totalDecrease: "500,000",
            discount: "0",
            totalReturn: "300,00",
            salesRevenue: "300,000",
            debtCollection: "500,000",
            payingGuests: "100,000",
            debtDuringDay: "-200,000",
            order: 20,
        },
        {
            id: 3,
            dayTrading: "22/12/2022",
            totalSale: "500,000,000,000,000",
            vat: "10%",
            totalDecrease: "500,000",
            discount: "0",
            totalReturn: "300,00",
            salesRevenue: "300,000",
            debtCollection: "500,000",
            payingGuests: "100,000",
            debtDuringDay: "-200,000",
            order: 20,
        },
        {
            id: 4,
            dayTrading: "22/12/2022",
            totalSale: "500,000",
            vat: "10%",
            totalDecrease: "500,000",
            discount: "0",
            totalReturn: "300,00",
            salesRevenue: "300,000",
            debtCollection: "500,000",
            payingGuests: "100,000",
            debtDuringDay: "-200,000",
            order: 20,
        },
        {
            id: 5,
            dayTrading: "22/12/2022",
            totalSale: "500,000",
            vat: "10%",
            totalDecrease: "500,000",
            discount: "0",
            totalReturn: "300,00",
            salesRevenue: "300,000",
            debtCollection: "500,000",
            payingGuests: "100,000",
            debtDuringDay: "-200,000",
            order: 20,
        },
    ])
    return (
        <>
            <View style={styles.main} >
                
                <FlatList data={dataReport} contentContainerStyle={styles.listContainer} ItemSeparatorComponent={() => <View style={styles.separator}  />} renderItem={({ item, index }) => {
                    return (
                        index === 0 ?
                        <>
                        <Text style={styles.titleDetailReport}>Chi tiết doanh số bàn hàng ngày 12/09/2024</Text>
                        <CardViewDetailReport key={index} data={item}  >

                        </CardViewDetailReport>
                        </>:
                        <CardViewDetailReport key={index} data={item}  >

                        </CardViewDetailReport>
                        

                    )
                }}>
                </FlatList>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20
    },
    separator: {
        height: 8, // Khoảng cách giữa các mục
    },
    listContainer:{
        paddingVertical: 20
    },
    titleDetailReport:{
        justifyContent: 'center',
        fontWeight: '500',
        fontFamily: 'Roboto',
        fontSize: 16,
        lineHeight: 24,
        color: '#000000D9',
        marginBottom: 8,
    }
    
})

export default SalesDetails;