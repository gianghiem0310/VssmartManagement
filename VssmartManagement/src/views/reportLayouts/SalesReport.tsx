import React, { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import CardViewReport from "../../components/reports/CardViewReport";

import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from "../../resource/types";

import { RouteProp, useNavigation } from '@react-navigation/native';

const SalesReport=()=> {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    function moveToSalesDetailsScreen(){
        navigation.navigate('SalesDetails')
    }
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
                <FlatList data={dataReport} showsVerticalScrollIndicator={false} contentContainerStyle={styles.listContainer} ItemSeparatorComponent={() => <View style={styles.separator}  />} renderItem={({ item, index }) => {
                    return (
                        <CardViewReport key={index} data={item} onPress={moveToSalesDetailsScreen} >

                        </CardViewReport>
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
    listContainer: {
        paddingVertical: 20, // Khoảng cách trên và dưới của danh sách
    },
    
})

export default SalesReport;