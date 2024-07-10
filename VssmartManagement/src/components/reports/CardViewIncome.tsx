import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Report } from "../../models/Models";
import { Button } from "@ant-design/react-native";
import MiniContent from "./MiniContent";
import MiniContentOrder from "./MiniContentOrder";
import MiniContentMoney from "./MiniContentMoney";
const CardViewIncome: React.FC<{ data: Report }> = ({ data }) => {
    const [isIncrease, setIncrease] = useState(false)
    return (
        <>
            <View style={styles.cardView}>
                <View style={styles.boxTopCardView}>
                    <View style={styles.contentBoxTop}>
                        <View style={styles.lineContentBoxTop}>
                            <MiniContent title="Ngày lập" data={data.dayTrading} />
                            <MiniContentMoney title="Tiền thu" data={data.totalSale} type={2} />
                        </View>
                        <View style={styles.lineContentBoxTop}>
                            <MiniContent title="Người thu" data={data.vat} />
                            <MiniContent title="Người chi" data={data.totalDecrease} />
                        </View>



                        <View style={styles.lineContentBoxTop}>
                            <MiniContent title="Nội dung" data={data.discount} />
                            <MiniContent title="Ghi chú" data={data.totalReturn} />
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
        borderWidth: 1,
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
    viewData: {
        minHeight: 22,
        flexDirection: 'row',
        gap: 4,
        flexWrap: 'wrap',
    },
    data: {
        minHeight: 22,
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 22,
        color: '#000000D9',
    }
})

export default CardViewIncome;