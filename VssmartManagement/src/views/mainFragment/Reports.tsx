import React from "react";
import { Text } from "react-native";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const Reports = () => {

    const data = {
        labels: [],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
                colors: [(opacity = 1) => `blue`, (opacity = 1) => `blue`, (opacity = 1) => `blue`, (opacity = 1) => `blue`, (opacity = 1) => `blue`, (opacity = 1) => `blue`, (opacity = 1) => `blue`]
            }
        ]
    };
    const barChartProps = {
        style: { marginVertical: 8, borderRadius: 16 },
        contentInset: { top: 30, bottom: 30 },
      };
    const chartConfig = {
        backgroundGradientFromOpacity: 0, // Đặt opacity của màu gradient từ
        backgroundGradientToOpacity: 0, // Đặt opacity của màu gradient đến
        fillShadowGradient: 'transparent',
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
        strokeWidth: 3, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional
        propsForLabels: { fontSize: 0 },

    };
    return (
        <>
            <BarChart
                data={{
                    labels: [],
                    datasets: [
                        {
                            data: [20, 45, 28, 80, 99, 43,20, 45, 28, 80, 99, 43],
                            colors: [(opacity = 1) => `blue`, (opacity = 1) => `blue`, (opacity = 1) => `blue`, (opacity = 1) => `blue`, (opacity = 1) => `blue`, (opacity = 1) => `blue`, (opacity = 1) => `blue`,(opacity = 1) => `blue`, (opacity = 1) => `blue`, (opacity = 1) => `blue`, (opacity = 1) => `blue`, (opacity = 1) => `blue`, (opacity = 1) => `blue`, (opacity = 1) => `blue`]
                        },
                    ],
                }}
                width={Dimensions.get('window').width - 16}
                height={200}
                yAxisLabel=''
                yAxisSuffix="Số tiền"
                chartConfig={{
                    backgroundGradientFromOpacity: 0, // Đặt opacity của màu gradient từ
                    backgroundGradientToOpacity: 0, // Đặt opacity của màu gradient đến
                    fillShadowGradient: 'transparent', // Không có bóng đổ (màu trong suốt)
                    color: () => `blue`, // Màu của các cột (màu đỏ)
                    strokeWidth: 3, // Độ dày của các đường viền
                    barPercentage: 0.5, // Phần trăm chiều rộng của mỗi cột
                    useShadowColorFromDataset: false, // Không sử dụng màu bóng đổ từ dữ liệu
                    propsForLabels: { fontSize: 0 }, // Ẩn nhãn
                   
                }}style={{alignContent:'center'}}
                withInnerLines={false}
                withCustomBarColorFromData
                flatColor
                
                
                
            />
        </>
    );
}

export default Reports;