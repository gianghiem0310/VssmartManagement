import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from './mainFragment/Dashboard';
import Reports from './mainFragment/Reports';
import Notification from './mainFragment/Notification';
import Users from './mainFragment/Users';
import Settings from './mainFragment/Settings';
import { StyleSheet } from 'react-native';
import { IconOutline } from '@ant-design/icons-react-native';

const Tab = createBottomTabNavigator();
const Main = ()=>{
    return (
        <>
        <NavigationContainer>
        <Tab.Navigator screenOptions={{ 
            tabBarStyle:{
                height: 94,
                borderTopLeftRadius:24,
                borderTopRightRadius:24,
                paddingBottom:32
            },
            tabBarLabelStyle:{
                fontSize:14,
                fontFamily:'Roboto',
                opacity:0.85
            }

        }}>
        <Tab.Screen name="Dashboard" component={Dashboard} options={{ title: 'Dashboard',headerTitleAlign: 'center' , tabBarIcon:({color,size})=>(
            <IconOutline name='dashboard' size={size} color={color} />
        )}} />
        <Tab.Screen name="Reports" component={Reports} options={{ title: 'Reports' ,headerTitleAlign: 'center', tabBarIcon:({color,size})=>(
            <IconOutline name='user' size={size} color={color} />
        )}} />
        <Tab.Screen name="Users" component={Users} options={{ title: 'Users',headerTitleAlign: 'center' , tabBarIcon:({color,size})=>(
            <IconOutline name='user' size={size} color={color} />
        )}} />
        <Tab.Screen name="Notification" component={Notification} options={{ title: 'Notification' ,headerTitleAlign: 'center', tabBarIcon:({color,size})=>(
            <IconOutline name='user' size={size} color={color} />
        )}} />
        <Tab.Screen name="Settings" component={Settings} options={{ title: 'Settings',headerTitleAlign: 'center' , tabBarIcon:({color,size})=>(
            <IconOutline name='user' size={size} color={color} />
        )}} />
      </Tab.Navigator>
    </NavigationContainer>
        </>
    )
}
const style = StyleSheet.create({
    bottomTabNavigator:{
        
    }
})
export default Main;