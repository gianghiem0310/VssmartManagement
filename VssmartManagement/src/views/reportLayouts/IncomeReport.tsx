import { View } from "@ant-design/react-native";
import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import CardViewIncome from "../../components/reports/CardViewIncome";
const IncomeReport = () => {
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
            <View style={styles.main}>
                <View style={styles.boxFilter}>

                </View>
                <View style={styles.boxResult}>
                <FlatList data={dataReport} showsVerticalScrollIndicator={false} contentContainerStyle={styles.listContainer} ItemSeparatorComponent={() => <View style={styles.separator}  />} renderItem={({ item, index }) => {
                    return (
                        <CardViewIncome key={index} data={item} >

                        </CardViewIncome>
                    )
                }}>
                </FlatList>
                </View>

            </View>
        </>
    );
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        height: 'auto',
        gap: 20,
    },
    boxFilter: {
        width: '100%',
        height: 72,
        backgroundColor: 'red'
    },
    boxResult: {
        width: '100%',
        height: 'auto',
        gap: 8
    },
    separator: {
        height: 8, // Khoảng cách giữa các mục
    },
    listContainer: {
         // Khoảng cách trên và dưới của danh sách
    },
})

export default IncomeReport;