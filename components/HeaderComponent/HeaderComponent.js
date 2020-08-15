import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


export const HeaderComponent = () => {
    return(
        <>
            <View>
                <Text style={style.txt}>Drinks</Text>
            </View>
            <View>

            </View>
            <View>
                <Icon 
                    onPress={()=>null} 
                    name="filter" size={30} color="black" style={style.icon}/>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    txt: {
        color: 'black',
        fontFamily: 'System',
        fontStyle: 'normal',
        fontSize: 24,
        lineHeight: 28,
        marginLeft: 20
    },
    icon: {
        marginRight: 20
    }
})