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

const Tab = createBottomTabNavigator();
const Main = ()=>{
    return (
        <>
        <NavigationContainer>
        <Tab.Navigator screenOptions={{ 
            tabBarStyle:{
                height: 94
            }

        }}>
        <Tab.Screen name="Dashboard" component={Dashboard} options={{ title: 'Dashboard',headerTitleAlign: 'center' }} />
        <Tab.Screen name="Reports" component={Reports} options={{ title: 'Reports' ,headerTitleAlign: 'center'}} />
        <Tab.Screen name="Users" component={Users} options={{ title: 'Users',headerTitleAlign: 'center' }} />
        <Tab.Screen name="Notification" component={Notification} options={{ title: 'Notification' ,headerTitleAlign: 'center'}} />
        <Tab.Screen name="Settings" component={Settings} options={{ title: 'Settings',headerTitleAlign: 'center' }} />
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