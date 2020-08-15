import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export const RenderItemComponent = ({item}) => {
    
    return(
        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom:20, marginTop: 5, marginLeft: 10}}>
            <Image 
                source={{uri: `${item.strDrinkThumb}`}}
                style={{height: 100, width: 100, marginRight: 20}} 
                />
            <Text style={style.txt}>{item.strDrink}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    image_list:{
        width: 100,
        height: 100,
        marginRight: 20
    },
    flat_container:{
        flexDirection:'row',
        alignItems: 'center',
        marginLeft: 20,
        marginBottom: 30      
    },
    txt:{
        fontFamily: 'System',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: 19,
        color: '#7E7E7E'
    }
   

})