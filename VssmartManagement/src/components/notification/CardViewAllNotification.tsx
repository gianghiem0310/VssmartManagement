import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Notification } from "../../models/Models";
import { IconFill } from "@ant-design/icons-react-native";
import TitleDescription from "./TitleDescription";
import StyleNormal from "./StyleNormal";
import StyleBold from "./StyleBold";

const CardViewAllNotification: React.FC<{ data: Notification }> = ({ data }) => {
    return (
        <>
            {data && data.type === 1 ?
                <View style={styles.cardView}>
                    <View style={styles.icon}>
                        <IconFill name={'info-circle'} size={16} color="#1890FF" />
                    </View>
                    <View style={styles.content}>
                        <View style={styles.headerContent}>
                            <Text style={styles.titleContent}>Chỉnh sửa đơn hàng</Text>
                            <Text style={styles.timeContent}>23/12/2024 11:43</Text>
                        </View>
                        <View style={styles.description}>
                            <TitleDescription title="Nhân viên: " data="Nguyễn Huy" date=""></TitleDescription>
                            <TitleDescription title="Mã ĐH: " data="TT2392903 " date="(12/06/2024)"></TitleDescription>
                            <TitleDescription title="K/H: " data="Đại lý Nhật Nguyệt" date=""></TitleDescription>
                            <TitleDescription title="Tổng tiền: " data="0đ" date="" />
                            <Text style={styles.text}>
                                Thay đổi K/H từ <StyleBold data=" ABC " ></StyleBold> sang <StyleBold data=" Nhuận Xuân Tây "></StyleBold> 
                            </Text>






                        </View>
                    </View>
                </View> :
                <View style={styles.cardView}>
                    <View style={styles.icon}>
                        <IconFill name={'check-circle'} size={16} color="#52C41A" />
                    </View>
                    <View style={styles.content}>
                        <View style={styles.headerContent}>
                            <Text style={styles.titleContent}>Chỉnh sửa đơn hàng</Text>
                            <Text style={styles.timeContent}>23/12/2024 11:43</Text>
                        </View>
                        <View style={styles.description}>
                            <TitleDescription title="Nhân viên: " data="Nguyễn Huy" date=""></TitleDescription>
                            <TitleDescription title="Mã ĐH: " data="TT2392903 " date="(12/06/2024)"></TitleDescription>
                            <TitleDescription title="K/H: " data="Đại lý Nhật Nguyệt" date=""></TitleDescription>
                            <TitleDescription title="Tổng tiền: " data="90,000,000đ" date=""></TitleDescription>
                            <TitleDescription title="Nợ trước: " data="12,280,000đ" date=""></TitleDescription>
                            <TitleDescription title="Chi tiết đơn hàng: " data="" date=""></TitleDescription>
                            <StyleBold data=" 1. KH - 3S*237ML (30 chai) (Sumitôm): 1,500 x 5,000 = 90,000,000đ "></StyleBold>
                            <StyleBold data=" 1. KH - 3S*237ML (30 chai) (Sumitôm): 1,500 x 5,000 = 90,000,000đ "></StyleBold>
                        </View>
                    </View>
                </View>
            }
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
        padding: 16,
        gap: 16,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row'
    },
    icon: {
        width: 16,
        height: 24,
        gap: 10,
        justifyContent: 'center', // Căn giữa theo chiều dọc,
    },
    content: {
        flex: 1,
        gap: 4,
    },
    headerContent: {
        width: '100%',
        height: 24,
        gap: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center'
    },
    titleContent: {
        height: 24,
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 24,
        color: '#000000D9',
        width: '60%',
    },
    timeContent: {
        width: '35%',
        height: 22,
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 22,
        color: '#00000073',
        alignItems: 'center',
        textAlign: 'right'
    },
    description: {
        height: 'auto',
    },
    text:{
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 24,
        color: '#000000D9',
    }


})

export default CardViewAllNotification;