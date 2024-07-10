import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MiniContent from "./MiniContent";
import { Button } from "@ant-design/react-native";
import { IconOutline } from "@ant-design/icons-react-native";
import { Report } from "../../models/Models";
import MiniContentOrder from "./MiniContentOrder";
import TotalOrder from "./TotalOrder";
import TotalOrderDetail from "./TotalOrderDetail";
const CardViewDetailReport: React.FC<{ data: Report }> = ({ data }) => {
    return (
        <>
            <View style={styles.cardView}>
                <View style={styles.boxTopCardView}>
                    <View style={styles.contentBoxTop}>
                        <View style={styles.viewData}>
                            <TotalOrderDetail order={data.order} />
                        </View>
                        <View style={styles.lineContentBoxTop}>
                            <MiniContent title="Mã đơn hàng" data={data.dayTrading} />
                            <MiniContent title="Tên khách hàng" data={data.dayTrading} />
                        </View>
                        <View style={styles.lineContentBoxTop}>
                            <MiniContent title="VAT" data={data.vat} />
                            <MiniContent title="Tiền bán" data={data.totalDecrease} />
                        </View>



                        <View style={styles.lineContentBoxTop}>
                            <MiniContent title="Giảm" data={data.discount} />
                            <MiniContent title="Chiết khấu" data={data.totalReturn} />
                        </View>
                        <View style={styles.lineContentBoxTop}>
                            <MiniContent title="Trả hàng" data={data.salesRevenue} />
                            <MiniContent title="Thanh toán" data={data.debtCollection} />
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    cardView: {
        width: '100%',
        borderRadius: 2,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#0000000F',
        gap: 16,
        backgroundColor: '#FFFFFF',
    },
    boxTopCardView: {
        width: '100%',
        padding: 16,
        gap: 16
    },
    contentBoxTop: {
        width: '100%',
        gap: 8
    },
    lineContentBoxTop: {
        flex: 1,
        minHeight: 46,
        gap: 24,
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection: 'row',
    },
    viewData:{
        minHeight: 22,
        flexDirection:'row',
        gap: 4,
        flexWrap: 'wrap',
    },
    data:{
        minHeight: 22,
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 22,
        color: '#000000D9',
    }
})

export default CardViewDetailReport;