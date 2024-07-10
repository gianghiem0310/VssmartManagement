import React from "react";
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import SalesReport from "../reportLayouts/SalesReport";
import IncomeReport from "../reportLayouts/IncomeReport";

const renderScene = SceneMap({
    sales: SalesReport,
    income: IncomeReport,
});
const Reports = () => {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'sales', title: 'Doanh số' },
        { key: 'income', title: 'Thu chi' },
    ]);
    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={props => <TabBar indicatorStyle={[styles.styleIndicator, { marginLeft: (layout.width / routes.length - 44) / 2, marginRight: (layout.width / routes.length - 4) / 2 }]} tabStyle={{ height: 56 }} {...props} style={styles.tabBar} labelStyle={styles.label}
                renderLabel={({ route, focused }) => (
                    
                        <Text style={[styles.label, { color: focused ? '#1890FF' : '#000000D9' }]}>
                            {route.title}
                        </Text>

                )}
            />}
        />
    );
}
const styles = StyleSheet.create({
    scene: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    tabBar: {
        backgroundColor: '#FFFFFF',
        elevation: 0, // tắt shadow trên Android
        shadowOpacity: 0, // tắt shadow trên iOS,
    },
    label: {
        color: '#000000D9',
        fontWeight: '400',
        fontFamily: 'Roboto',
        fontSize: 16,
        lineHeight: 24,
        textTransform: 'none'
    },
    styleIndicator: {
        alignSelf: 'center', height: 2, width: 44, backgroundColor: '#1890FF'
    }
});
export default Reports;