import React from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import AllNotification from '../notificationLayouts/AllNotification';
import EditNotification from '../notificationLayouts/EditNotification';
import OrderNotification from '../notificationLayouts/OrderNotification';
import PayNotification from '../notificationLayouts/PayNotification';
import { scale } from 'react-native-size-matters'; 
const renderScene = SceneMap({
    all: AllNotification,
    edit: EditNotification,
    order: OrderNotification,
    pay: PayNotification,
});

const Notification = () => {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'all', title: 'Tất cả' },
        { key: 'edit', title: 'Chỉnh sửa' },
        { key: 'order', title: 'Đơn hàng' },
        { key: 'pay', title: 'Thanh toán' },
    ]);


    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={props => <TabBar indicatorStyle={[styles.styleIndicator,{  marginLeft: (layout.width / routes.length - 44) / 2, marginRight: (layout.width / routes.length - 4) / 2 }]} tabStyle={{ height: 56 }} {...props} style={styles.tabBar} labelStyle={styles.label}
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
        fontSize: 14,//16
        lineHeight: 24,
        textTransform: 'none'
    },
    styleIndicator: {
        alignSelf: 'center', height: 2, width: 44, backgroundColor: '#1890FF'
    }
});
export default Notification;