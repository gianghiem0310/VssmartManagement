import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MiniContent from "./MiniContent";
import { Button } from "@ant-design/react-native";
import { IconOutline } from "@ant-design/icons-react-native";
import { Report } from "../../models/Models";
import MiniContentOrder from "./MiniContentOrder";
const CardViewReport: React.FC<{ data: Report ,onPress: ()=>any}> = ({ data,onPress }) => {
    const [isViewMore, setIsViewMore] = useState(false);

    function onClickViewMore() {
        setIsViewMore(!isViewMore);
    }
    return (
        <>
            <View style={styles.cardView}>
                <View style={styles.boxTopCardView}>
                    <View style={styles.contentBoxTop}>
                        <View style={styles.lineContentBoxTop}>
                            <MiniContent title="Ngày giao dịch" data={data.dayTrading} />
                            <MiniContentOrder title="Tổng tiền bán" data={data.totalSale} order={data.order} />
                        </View>
                        <View style={styles.lineContentBoxTop}>
                            <MiniContent title="VAT" data={data.vat} />
                            <MiniContent title="Tổng giảm" data={data.totalDecrease} />
                        </View>
                        {isViewMore && isViewMore ?
                            <>

                                <View style={styles.lineContentBoxTop}>
                                    <MiniContent title="Chiết khấu" data={data.discount} />
                                    <MiniContent title="Tổng trả hàng" data={data.totalReturn} />
                                </View>
                                <View style={styles.lineContentBoxTop}>
                                    <MiniContent title="Thu bán hàng" data={data.salesRevenue} />
                                    <MiniContent title="Thu nợ" data={data.debtCollection} />
                                </View>
                                <View style={styles.lineContentBoxTop}>
                                    <MiniContent title="Chi trả khách" data={data.payingGuests} />
                                    <MiniContent title="Nợ trong ngày" data={data.debtDuringDay} />
                                </View>
                            </>
                            : 
                            <>
                            </>
                        }
                    </View>
                </View>
                <View style={styles.boxBottomCardView}>
                    <View style={styles.contentBoxBottom}>
                        <Button style={styles.buttonLeft} onPress={onClickViewMore}>
                            <View style={styles.viewButton}>
                                <Text style={styles.textButtonLeft}>
                                    {isViewMore ? "Rút gọn" : "Xem thêm"}
                                </Text>
                                <View style={styles.viewIconButton}>
                                    <IconOutline name={isViewMore ? "up" : "down"} size={10} color="#1890FF" />
                                </View>
                            </View>


                        </Button>
                        <Button style={styles.buttonRight} onPress={onPress}>
                            <View style={styles.viewButton}>
                                <Text style={styles.textButtonRight}>
                                    Chi tiết doanh số
                                </Text>

                            </View>


                        </Button>
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
    boxBottomCardView: {
        width: '100%',
        height: 40,
        paddingLeft: 16,
        paddingBottom: 16,
        paddingRight: 16,
        gap: 10,
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
    contentBoxBottom: {
        flex: 1,
        height: 24,
        gap: 10,
        flexDirection: 'row'
    },
    buttonLeft: {
        flex: 1,
        width: '50%',
        height: 24,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#40A9FF',
        paddingLeft: 7,
        paddingRight: 7,
        gap: 4,
        shadowColor: '#00000004',
    },
    viewButton: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },
    textButtonLeft: {
        height: 22,
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 22,
        color: '#40A9FF',
        textAlign: 'center',
    },
    viewIconButton: {
        height: 14,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 3
    },
    buttonRight: {
        flex: 1,
        width: '50%',
        height: 24,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#40A9FF',
        paddingLeft: 7,
        paddingRight: 7,
        gap: 4,
        shadowColor: '#00000004',
        backgroundColor: '#40A9FF'
    },
    textButtonRight: {
        height: 22,
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 22,
        color: '#FFFFFF',
        textAlign: 'center',
    },


})

export default CardViewReport;