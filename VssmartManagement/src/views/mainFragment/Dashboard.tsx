import React from "react";
import { useState } from "react";
import { Dimensions, SafeAreaView, StyleSheet, View, Text, ScrollView, TouchableOpacity, LayoutChangeEvent } from 'react-native';
import { Button } from "@ant-design/react-native";
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import IconOutline from "@ant-design/icons-react-native/lib/outline";
import { Table, TableWrapper, Rows, Col, Cols, Cell } from 'react-native-table-component';
import Row from "../../components/Row";
import RowTitle from "../../components/RowTitle";
import {
    BarChart,
} from "react-native-chart-kit";

const Dashboard = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [showStart, setShowStart] = useState(false);
    const tableData = [
        ['1', 'Product A', '50'],
        ['2', 'Product B', '34'],
        ['3', 'Product C', '12'],
        ['4', 'Product D', '12'],
        ['5', 'Product E', '12'],
    ];

    const tableData2 = [
        ['1', 'Tên khách hàng A', '70,000,000'],
        ['2', 'Tên khách hàng B', '34,000,000'],
        ['3', 'Tên khách hàng C', '12,000,000'],
        ['4', 'Tên khách hàng D', '12,000,000'],
        ['5', 'Tên khách hàng E', '12,000,000'],
    ];
    const data = {
        labels: ['12/9','13/9','14/9','15/9','16/9','Hôm nay'],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
                colors: [(opacity = 1) => `#91D5FF`, (opacity = 1) => `#91D5FF`, (opacity = 1) => `#91D5FF`, (opacity = 1) => `#91D5FF`, (opacity = 1) => `#91D5FF`, (opacity = 1) => `#91D5FF`, (opacity = 1) => `#91D5FF`]
            }
        ]
    }; const [viewWidth, setViewWidth] = useState(0);

    const handleLayout = (event:LayoutChangeEvent) => {
      const { width } = event.nativeEvent.layout;
      setViewWidth(width);
    };


    function getTimeStart(date: Date) {
        const formattedDate = moment(date).format('DD/MM/YYYY');
        return formattedDate;
    }
    function showDatePickerStart() {
        setShowStart(true);
    }
    function hideDataPickerStart(date: Date) {
        setStartDate(date);
        setShowStart(false);
    }



    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    function getTime(date: Date) {
        const formattedDate = moment(date).format('DD/MM/YYYY');
        return formattedDate;
    }
    function showDatePicker() {
        setShow(true);
    }
    function hideDataPicker(date: Date) {
        setDate(date);
        setShow(false);
    }
    return (
        <><SafeAreaView>
            <ScrollView style={styles.scrollView}>
                <View style={styles.main}>
                    <View style={styles.cardDate}>
                        <TouchableOpacity onPress={showDatePickerStart}>
                            <Text style={styles.titleDate}>Từ: {getTimeStart(startDate)}

                            </Text>

                        </TouchableOpacity>
                        <IconOutline name='swap-right' size={16} color={'#00000040'} style={{}} />
                        <DatePicker open={showStart} date={startDate} modal mode={'date'} onConfirm={(date) => hideDataPickerStart(date)}>

                        </DatePicker>

                    </View>
                    <View style={styles.cardDate}>
                        <TouchableOpacity onPress={showDatePicker} >
                            <Text style={styles.titleDate}>Đến: {getTime(date)}

                            </Text>

                        </TouchableOpacity>
                        <IconOutline name='calendar' size={16} color={'#00000040'} style={{}} />
                        <DatePicker open={show} date={date} modal mode={'date'} onConfirm={(date) => hideDataPicker(date)}>

                        </DatePicker>
                    </View>

                </View>
                <View style={styles.container}>
                    <View style={styles.card}>
                        <View style={styles.contentCard}>
                            <View style={styles.titleContentCard}>
                                <Text style={styles.formatTitleContentCard}>Tổng doanh thu</Text>
                            </View>
                            <View style={styles.totalContentCard}>
                                <Text style={styles.formatTotalContentCard}>75,126,560</Text>
                            </View>
                            <View style={styles.lineContentCard}>
                                <View style={styles.lineMain}></View>
                            </View>
                            <View style={styles.statusContentCard}>
                                <Text style={styles.statusContentCard1}>So tháng trước</Text>
                                <Text style={styles.statusContentCard2}>12%</Text>

                            </View>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.contentCard}>
                            <View style={styles.titleContentCard}>
                                <Text style={styles.formatTitleContentCard}>Tổng tiền thu</Text>

                                <IconOutline name='exclamation-circle' size={16} color={'#000000D9'} />
                            </View>
                            <View style={styles.totalContentCard}>
                                <Text style={styles.formatTotalContentCard}>12,126,560</Text>
                            </View>
                            <View style={styles.lineContentCard}>
                                <View style={styles.lineMain}></View>
                            </View>
                            <View style={styles.statusContentCard}>
                                <Text style={styles.statusContentCard1}>TB hằng ngày</Text>
                                <Text style={styles.statusContentCard2}>2,812,423</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.cardMore}>
                        <View style={styles.contentCard}>
                            <View style={styles.titleContentCard}>
                                <Text style={styles.formatTitleContentCard}>Tổng chi phí </Text>
                            </View>
                            <View style={styles.chart}>

                            </View>

                            <View style={styles.lineContentCard}>
                                <View style={styles.lineMain}></View>
                            </View>

                            <Text style={styles.titleParameter}>75,126,560</Text>

                        </View>
                    </View>
                    <View style={styles.cardMore}>
                        <View style={styles.contentCard}>
                            <View style={styles.titleContentCard}>
                                <Text style={styles.formatTitleContentCard}>Tổng lợi nhuận </Text>

                            </View>
                            <View style={styles.chart}>

                            </View>

                            <View style={styles.lineContentCard}>
                                <View style={styles.lineMain}></View>
                            </View>

                            <Text style={styles.titleParameter}>75,126,560</Text>

                        </View>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.card}>
                        <View style={styles.contentCard}>
                            <View style={styles.titleContentCard}>
                                <Text style={styles.formatTitleContentCard}>Công nợ hiện tại</Text>


                            </View>
                            <View style={styles.totalContentCard}>
                                <Text style={styles.formatTotalContentCard}>75,126,560</Text>
                            </View>
                            <View style={styles.lineContentCard}>
                                <View style={styles.lineMain}></View>
                            </View>
                            <View style={styles.statusContentCard}>
                                <Text style={styles.statusContentCard1}>So tháng trước</Text>
                                <Text style={styles.statusContentCard2}>12%</Text>
                                <IconOutline name="caret-down" color="#FF4D4F" style={styles.statusContentCard3} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.contentCard}>
                            <View style={styles.titleContentCard}>
                                <Text style={styles.formatTitleContentCard}>Nhà cung cấp</Text>

                            </View>
                            <View style={styles.totalContentCard}>
                                <Text style={styles.formatTotalContentCard}>12,126,560</Text>
                            </View>
                            <View style={styles.lineContentCard}>
                                <View style={styles.lineMain}></View>
                            </View>
                            <View style={styles.statusContentCard}>
                                <Text style={styles.statusContentCard1}>So tháng trước</Text>
                                <Text style={styles.statusContentCard2}>2%</Text>
                                <IconOutline name="caret-up" color="#52C41A" style={styles.statusContentCard3} />

                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.tableTopSelling}>
                    <View style={styles.rowTitleTableTopSelling}>
                        <Text style={styles.formatTitleContentCard}>5 Sản phẩm có doanh số cao nhất</Text>

                        <TouchableOpacity>
                            <Text style={{ height: 22, lineHeight: 22, fontFamily: 'Roboto', fontWeight: 400, fontSize: 14, color: '#1890FF' }}>Xem tất cả</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.tableTableTopSelling}>
                        {/* Table */}
                        <RowTitle key={1} height={39} background="#FAFAFA" />
                        {
                            tableData.map((rowData, index) => {
                                return (
                                    <Row key={index + 1} height={39} background="#ffffff" data={rowData} />
                                );
                            })
                        }

                    </View>
                </View>
                <View style={styles.tableTopSelling}>
                    <View style={styles.rowTitleTableTopSelling}>
                        <Text style={styles.formatTitleContentCard}>5 Khách hàng mua nhiều nhất</Text>

                        <TouchableOpacity>
                            <Text style={{ height: 22, lineHeight: 22, fontFamily: 'Roboto', fontWeight: 400, fontSize: 14, color: '#1890FF' }}>Xem tất cả</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.tableTableTopSelling}>
                        {/* Table */}
                        <RowTitle key={1} height={39} background="#FAFAFA" />
                        {
                            tableData2.map((rowData, index) => {
                                return (
                                    <Row key={index + 1} height={39} background="#ffffff" data={rowData} />
                                );
                            })
                        }

                    </View>
                </View>
                <View style={styles.tableChart}>
                    <View style={styles.contentTableChart}>
                        <Text style={styles.titleContentTableChart}>Doanh thu theo ngày</Text>
                        <View style={styles.chartContentTableChart}>
                            <Text style={styles.titleContentTableChart}>Số tiền</Text>
                            <View style={styles.chartMain} onLayout={handleLayout}>
                                {/* BarChart */}
                                <BarChart
                                    data={data}
                                    width={viewWidth}
                                    height={200}
                                    yAxisLabel=""
                                    yAxisSuffix="tr"
                                    chartConfig={{
                                        backgroundGradientFromOpacity: 0, // Đặt opacity của màu gradient từ
                                        backgroundGradientToOpacity: 0, // Đặt opacity của màu gradient đến
                                        fillShadowGradient: 'transparent', // Không có bóng đổ (màu trong suốt)
                                        color: () => `#91D5FF`, // Màu của các cột (màu đỏ)
                                        barPercentage: 0.6, // Phần trăm chiều rộng của mỗi cột
                                        decimalPlaces: 0,
                                        useShadowColorFromDataset: false, // Không sử dụng màu bóng đổ từ dữ liệu
                                        propsForVerticalLabels: {
                                            fontSize: 13,
                                            fill: '#8C8C8C', // Đổi màu chữ của nhãn trục y
                                          }, propsForHorizontalLabels: {
                                            fontSize: 13,
                                            fill: '#8C8C8C', // Đổi màu chữ của nhãn trục x
                                          },
                                          propsForBackgroundLines: {
                                            stroke: '#e3e3e3',
                                          },
                                    }} 
                                    withInnerLines={true}
                                    withHorizontalLabels={true}
                                    withCustomBarColorFromData
                                    withVerticalLabels // Hiển thị line y
                                    flatColor
                                    
                                    
                                    
                                />
                            </View>
                            <View style={styles.viewTimeContentTableChart}>
                                <Text style={styles.titleTimeContentTableChart}>Thời gian</Text>

                            </View>
                        </View>
                    </View>
                </View>



            </ScrollView>

        </SafeAreaView>
        </>


    );
}
const styles = StyleSheet.create({
    main: {
        backgroundColor: '#fff',
        height: 32,
        marginTop: 20,
        marginStart: 20,
        marginEnd: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        paddingStart: 12,
        paddingEnd: 12,
        borderWidth: 1,
        borderColor: '#D9D9D9'
    },
    scrollView: {

    },
    cardDate: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 22,
    },
    titleDate: {
        fontSize: 14,
        color: '#000000',
        paddingTop: 1,
        paddingBottom: 1,
    },

    container: {
        marginTop: 8,
        marginStart: 20,
        marginEnd: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 8,

    },
    card: {
        backgroundColor: '#ffffff',
        flex: 1,
        width: '50%',
        height: 136,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#D9D9D9',
        padding: 16
    },
    contentCard: {
        flex: 1,
        width: '100%',
    },
    titleContentCard: {
        height: 32,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    formatTitleContentCard: {
        fontSize: 14,
        fontFamily: 'Roboto',
        height: 22,
        lineHeight: 22

    },

    totalContentCard: {
        height: 32,
    },
    formatTotalContentCard: {
        width: '100%',
        height: 32,
        fontFamily: 'Roboto',
        fontSize: 24,
        color: '#000000D9',
        fontWeight: '500',
        lineHeight: 32,
        alignContent: 'center'


    },
    lineContentCard: {
        height: 18,
        paddingTop: 9,
        paddingBottom: 9
    },

    lineMain: {
        width: '100%',
        borderColor: '#0000000F',
        borderWidth: 1
    },
    statusContentCard: {
        height: 22,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },
    statusContentCard1: {
        height: 22,
        fontFamily: 'Roboto',
        fontSize: 14,
        color: '#000000D9',
        fontWeight: '400',
        lineHeight: 22
    },
    statusContentCard2: {
        height: 22,
        fontFamily: 'Roboto',
        fontSize: 14,
        color: '#000000D9',
        fontWeight: '400',
        lineHeight: 22
    },
    statusContentCard3: {
        width: 14,
        height: 14
    },

    tableTopSelling: {
        height: 313,
        marginTop: 8,
        borderWidth: 1,
        backgroundColor: '#ffffff',
        marginStart: 20,
        marginEnd: 20,
        padding: 16,
        borderRadius: 2,
        borderColor: '#0000000F',
        alignItems: 'center',
        gap: 16

    },
    rowTitleTableTopSelling: {
        width: '100%',
        height: 32,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    tableTableTopSelling: {
        width: '100%',
        height: 156,

    },
    //Table


    headTable: {
        height: 39, backgroundColor: '#FAFAFA', gap: 4,
        borderBottomWidth: 1, borderColor: '#0000000F'
    },
    wrapperTable: { flexDirection: 'row' },
    textTable: { margin: 6, textAlign: 'center' },
    link: { color: 'blue', textDecorationLine: 'underline' },
    headerTextTable: {
        margin: 6, textAlign: 'left', fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 22,
        color: '#000000D9',
        height: 22,

    },



    wrapper: { flexDirection: 'row' },
    headTableRow: {
        height: 39, backgroundColor: '#ffffff', gap: 4,
        borderBottomWidth: 1, borderColor: '#0000000F'
    },
    headerTextTableRowBlue: {
        margin: 6, textAlign: 'left', fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 22,
        color: '#1890FF',
        height: 22,
    },
    headerTextTableRow: {
        margin: 6, textAlign: 'left', fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 22,
        color: '#000000D9',
        height: 22,
    },
    //Table End


    buttonViewAll: {
        width: '100%',
        height: 40,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#D9D9D9',
        paddingTop: 6.4,
        paddingBottom: 6.4,
        paddingLeft: 15,
        paddingStart: 15,
        gap: 10,
        justifyContent: 'center', // Căn giữa theo chiều dọc
        alignItems: 'center', // Căn giữa theo chiều ngang
    },
    viewTextButton: {
        width: '25%',
        height: 25.2,
        justifyContent: 'center', // Căn giữa theo chiều dọc
        alignItems: 'center', // Căn giữa theo chiều ngang
    },
    titleButtonViewAll: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        color: '#000000D9',
        textAlign: 'center', // Căn giữa văn bản theo chiều ngang
    },



    containerMore: {
        marginTop: 8,
        marginStart: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 8,

    },
    cardMore: {
        backgroundColor: '#ffffff',
        flex: 1,
        width: '50%',
        height: 148,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#D9D9D9',
        padding: 16
    },
    chart: {
        width: '100%',
        height: 34,
        backgroundColor: 'yellow',
        gap: 4
    },
    graphStyle: {
        width: '100%',
        height: 220, // Bạn có thể thay đổi giá trị này theo nhu cầu
    },
    titleParameter: {
        width: '100%',
        height: 32,
        fontFamily: 'Roboto',
        fontSize: 24,
        color: '#000000D9',
        fontWeight: '500',
        lineHeight: 32
    },
    percentParameter: {
        height: 22,
        fontFamily: 'Roboto',
        fontSize: 14,
        color: '#000000D9',
        fontWeight: '400',
        lineHeight: 22
    },
    tableChart: {
        marginTop: 8,
        marginStart: 20,
        marginEnd: 20,
        marginBottom: 169,
        height: 317,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#0000000F',
        padding: 16,
        gap: 8,
        backgroundColor: '#ffffff'
    },
    contentTableChart: {

        width: '100%',
        height: '100%',
        gap: 20
    },
    titleContentTableChart: {
        width: '100%',
        height: 22,
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 22,
        alignContent: 'center',
        color: '#000000D9'
    },
    chartContentTableChart: {
        width: '100%',
        height: 243,
        gap: 8
    },
    chartMain: {
        width: '100%',
        height: 183,
        
    },
    viewTimeContentTableChart: {
        flex: 1,
        justifyContent: 'flex-end', // Đẩy về phía bên phải
        alignItems: 'flex-end',
    },
    titleTimeContentTableChart: {
        height: 22,
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 22,
        alignContent: 'center',
        color: '#000000D9',

    },
});

export default Dashboard;