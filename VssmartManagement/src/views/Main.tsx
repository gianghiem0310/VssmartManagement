import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from './mainFragment/Dashboard';
import Reports from './mainFragment/Reports';
import Notification from './mainFragment/Notification';
import Users from './mainFragment/Users';
import Settings from './mainFragment/Settings';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { IconOutline } from '@ant-design/icons-react-native';
import SalesDetails from './SalesDetails';
import { inlineStyles } from 'react-native-svg';
import { RootStackParamList } from '../resource/types';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ReportStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Reports" component={Reports} options={{ headerShown: false }} />
            <Stack.Screen name="DetailReport" component={SalesDetails} options={{ headerTitleAlign: 'center' }} />
        </Stack.Navigator>
    );
}

const MainStack = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: {
                height: 94,
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
                paddingBottom: 32,

            },
            tabBarLabelStyle: {
                fontSize: 14,
                fontFamily: 'Roboto',
                opacity: 0.85,

            },
            tabBarInactiveTintColor: 'rgba(0, 0, 0, 0.85)'

        }}>
            <Tab.Screen name="Dashboard" component={Dashboard} options={{
                title: 'Dashboard', headerTitleAlign: 'center', tabBarIcon: ({ color, size }) => (
                    <IconOutline name='dashboard' size={size} color={color} />
                )
            }} />
            <Tab.Screen name="Reports" component={Reports} options={{
                title: 'Reports', headerTitleAlign: 'center', tabBarIcon: ({ color, size }) => (
                    <IconOutline name='file-text' size={size} color={color} />
                )
            }} />
            <Tab.Screen name="Users" component={Users} options={{
                title: 'Users', headerTitleAlign: 'center', tabBarIcon: ({ color, size }) => (
                    <IconOutline name='user' size={size} color={color} />
                )
            }} />
            <Tab.Screen name="Notification" component={Notification} options={{
                headerShadowVisible: false, title: 'Notification', headerTitleAlign: 'center', tabBarIcon: ({ color, size }) => (
                    <IconOutline name='bell' size={size} color={color} />
                )
            }} />
            <Tab.Screen name="Settings" component={Settings} options={{
                title: 'Settings', headerTitleAlign: 'center', tabBarIcon: ({ color, size }) => (
                    <IconOutline name='setting' size={size} color={color} />
                )
            }} />
        </Tab.Navigator>
    )
}

const CustomTitle = () => (
    <Text style={styles.title}>Chi tiết doanh số bán hàng</Text>
);

const CustomBackButton = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <IconOutline name="left" size={12} color="#000000D9" />
        </TouchableOpacity>
    )


};
const Main = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Main" component={MainStack} options={{ headerShown: false }} />
                    <Stack.Screen name="SalesDetails" component={SalesDetails} options={{ headerTitle: () => <CustomTitle />, headerBackVisible: false, headerTitleAlign: 'center', headerShadowVisible: false, headerLeft: () => <CustomBackButton /> }} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}
const styles = StyleSheet.create({
    bottomTabNavigator: {

    },
    title: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
        color: '#000000D9'
    }
})
export default Main;