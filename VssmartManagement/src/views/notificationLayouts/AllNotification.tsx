import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Text } from "react-native";
import CardViewAllNotification from "../../components/notification/CardViewAllNotification";

const AllNotification = () => {
    const [dataNoti,setDataNoti] = useState([
        {id: 1, title:'Chỉnh sửa',type: 1},
        {id: 2, title:'Chỉnh sửa',type: 2},
        {id: 3, title:'Chỉnh sửa',type: 2},
        {id: 4, title:'Chỉnh sửa',type: 1},
        {id: 5, title:'Chỉnh sửa',type: 1},
        {id: 6, title:'Chỉnh sửa',type: 1},
        {id: 7, title:'Chỉnh sửa',type: 1},
    ])
    return (
        <View style={styles.main}>
            <FlatList data={dataNoti} showsVerticalScrollIndicator={false} renderItem={({item,index})=>{
                return(
                   <CardViewAllNotification data={item}>

                   </CardViewAllNotification>
                )
            }}>


            </FlatList>
        </View>
    );
}
const styles = StyleSheet.create({
    main:{
        flex: 1,
    }
})

export default AllNotification;