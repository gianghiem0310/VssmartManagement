import React from "react";
import { Dimensions, Text, View } from "react-native";
import { BarChart } from "react-native-chart-kit";
const Notification = () => {

    const data = {
        labels: ['Nam', 'Hoa', 'Nhi'],
        datasets: [
            {
                data: [15, 20, 25],
            },
        ],
    };



    return (
        <>
            <View>
                <BarChart data={data} width={Dimensions.get('window').width} height={200} chartConfig={{
                    backgroundGradientFrom: "#1E2923",
                    backgroundGradientFromOpacity: 0,
                    backgroundGradientTo: "#08130D",
                    backgroundGradientToOpacity: 0.5,
                    color: (opacity = 1) => `#1e81b0`,
                    strokeWidth: 2, // optional, default 3
                    barPercentage: 1,
                    useShadowColorFromDataset: false // optional
                }}
                verticalLabelRotation={30}
                yAxisLabel="$"
                yAxisSuffix="$"
                />
            </View>
        </>
    );
}

export default Notification;