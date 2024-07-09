import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import AllNotification from '../notificationLayouts/AllNotification';
import EditNotification from '../notificationLayouts/EditNotification';
import OrderNotification from '../notificationLayouts/OrderNotification';
import PayNotification from '../notificationLayouts/PayNotification';
const renderScene = SceneMap({
    all: AllNotification,
    edit: EditNotification,
    order: OrderNotification,
    pay: PayNotification,
});

const Notification = ()=> {
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
        />
    );
}
export default Notification;