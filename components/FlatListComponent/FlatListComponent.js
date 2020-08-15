import React from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native'
import RenderItemComponent from './RenderItemComponent'

export const FlatListComponent = ({allData, onEndHandler, _scrolled}) => {
    // console.log(data);
    return(
        <>
        <FlatList
          onScroll={_scrolled}
          onEndReached={onEndHandler}
          onEndReachedThreshold={0.1}
          data={allData.data}
          keyExtractor={(item, index)=> index.toString()}
          renderItem={({item})=>{
            return(
              <View style={{flex: 1}}>
                <FlatList
                  initialNumToRender={5}
                  maxToRenderPerBatch={10}
                  windowSize={10}
                  ListHeaderComponent={()=><Text style={style.txt}>{item.title}</Text>}
                  data={item.data.slice(0,15)}
                  keyExtractor={(item, index)=> index.toString()}
                  renderItem={({item})=>{
                    return(
                        <RenderItemComponent item={item}/>
                  )  
                  }}
                />
              </View>
            )
          }}
        />
        </>

    )
}

const style = StyleSheet.create({
    txt: {
        color: '#7E7E7E',
        fontFamily: 'System',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: 16,
        marginLeft: 10
    }
})