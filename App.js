/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

// Components
import HeaderComponent from './components/HeaderComponent'
import FlatListComponent from './components/FlatListComponent'

//For getting data
import axios from 'axios'

// Navigation

const App = () => {
  // Set state with hooks
  const [ready, setReady] = useState(false)
  const [load, setLoading] = useState({
    Cocoa: false,
    Coctails: false,
    Shots: false,
    MFS: false,
    CT: false,
    HM: false,
    Beer: false
  })
  // All data for renering, it will be filter soon )
  const [allData, setAllData] = useState(
    {
      data: null
    }
  )
  // States for every list
  const [dataOrdinaryDrink, setDataOrdinaryDrink] = useState({
    title: '',
    data: []
  })
  const [dataCoctails, setDataCoctails] = useState({
    title: '',
    data: []
  })
  const [dataCocoa, setDataCocoa] = useState({
    title: '',
    data: [] 
  })

  const [dataShots, setDataShots] = useState({
    title:'',
    data:[]
  })

  const [dataMFS, setDataMFS] = useState({
    title: '',
    data: []
  })

  const [dataCT, setDataCT] = useState({
    title: '',
    data: []
  })

  const [dataHomeM, setDataHomeM] = useState({
    title: '',
    data: []
  })

  const [dataBeer, setDataBeer] = useState({
    title: '',
    data: []
  })
 
  
  // Getting first data from API and set first state-data
  useEffect(()=>{ 
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary Drink`)
      .then(res => {
        const nameList = res.data;
        setDataOrdinaryDrink({title: 'Ordinary', data: nameList.drinks})
      })
      loadFlag = true
       
    setAllData({
      data: 
        [
          {title:'Ordinary', data:dataOrdinaryDrink.data},
        ]
        })
  },[])
  
  // Need to create service for this
  const getCocoa = async () => {
    return await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocoa`)
    .then(res => {
      const nameListCocoa = res.data;
      setDataCocoa({title: 'Cocoa', data: nameListCocoa.drinks})
    })
    
  }

  const getCoctails = async () => {
    return await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`)
    .then(res => {
      const nameListCoctails = res.data;
      setDataCoctails({title: 'Coctails', data: nameListCoctails.drinks})
    })
  }

  const getShots = async () => {
    return  await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=shot`)
      .then(res => {
        const nameListShot = res.data;
        setDataShots({title: 'Shot', data:nameListShot.drinks})
      }) 
  }

  const getMFS = async () => {
    return await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Milk / Float / Shake`)
      .then(res => {
        const nameListMFS = res.data;
        setDataMFS({title: 'Milk/Float/Shake', data: nameListMFS.drinks})
      })
  }

  const getCT = async () => {
    return await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Coffee / Tea`)
      .then(res => {
        const nameListCoffeTea = res.data;
        setDataCT({title:'Coffee/Tea', data: nameListCoffeTea.drinks})
      })
  }

  const getHomemade = async () => {
    return await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Homemade Liqueur`)
      .then(res => {
        const nameListLiqueur = res.data;
        setDataHomeM({title:'Homemade Liqueur', data: nameListLiqueur.drinks})
      })
  }

  const getBeer = async () => {
    return await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Beer`)
      .then(res => {
        const nameListBeer = res.data;   
        setDataBeer({title:'Beer', data: nameListBeer.drinks})
      })
  }
  // Fix problem with rendering and onEndHandler start
  const _scrolled = ()=> {
   setReady(true)
  }

  //  Hanle with endscrolling
  const onEndHandler =  () =>{
    // Fix problem with rendering and onEndHandler start
    if(!ready){return null}
    // This is "kostil' but I had no time for more beautiful things"
    if(load.Cocoa === false){
      getCocoa()
      setAllData({
        data: 
        [
          {title:'Ordinary', data:dataOrdinaryDrink.data},
          {title:'Cocoa', data: dataCocoa.data},
        ]
      })
      setLoading(()=>({...load, Cocoa: true}))
    }
    if(load.Coctails === false || load.Cocoa === true){
      getCoctails()
      setAllData({
        data: 
          [
            {title:'Ordinary', data:dataOrdinaryDrink.data},
            {title:'Cocoa', data: dataCocoa.data},
            {title: 'Coctails', data: dataCoctails.data}
          ]
          })
      setLoading(()=>({...load, Coctails: true}))    
    }
    if(load.Shots === false || load.Cocoa === true || load.Coctails === true){
      getShots()
      setAllData({
        data: 
          [
            {title:'Ordinary', data:dataOrdinaryDrink.data},
            {title:'Cocoa', data: dataCocoa.data},
            {title: 'Coctails', data: dataCoctails.data},
            {title: 'Shot', data: dataShots.data}
            
          ]
          })
    }
    if(load.MFS === false){
      getMFS()
      setAllData({
        data: 
          [
            {title:'Ordinary', data:dataOrdinaryDrink.data},
            {title:'Cocoa', data: dataCocoa.data},
            {title: 'Coctails', data: dataCoctails.data},
            {title: 'Shot', data: dataShots.data},
            {title: 'Milk/Float/Shake', data: dataMFS.data}
          ]
          })
    }

    if(load.CT === false){
      getCT()
      setAllData({
        data: 
          [
            {title:'Ordinary', data:dataOrdinaryDrink.data},
            {title:'Cocoa', data: dataCocoa.data},
            {title: 'Coctails', data: dataCoctails.data},
            {title: 'Shot', data: dataShots.data},
            {title: 'Milk/Float/Shake', data: dataMFS.data},
            {title: 'Coffee/Tea', data: dataCT.data}
          ]
          })
      // setLoading(()=>({...load, CT: true}))     
    }
    if(load.HM === false){
      getHomemade()
      setAllData({
        data: 
          [
            {title:'Ordinary', data:dataOrdinaryDrink.data},
            {title:'Cocoa', data: dataCocoa.data},
            {title: 'Coctails', data: dataCoctails.data},
            {title: 'Shot', data: dataShots.data},
            {title: 'Milk/Float/Shake', data: dataMFS.data},
            {title: 'Coffee/Tea', data: dataCT.data},
            {title: 'Homemade Liqueur', data: dataHomeM.data},
          ]
          })
    }
    if(load.Beer === false){
      getBeer()
      setAllData({
        data: 
          [
            {title:'Ordinary', data:dataOrdinaryDrink.data},
            {title:'Cocoa', data: dataCocoa.data},
            {title: 'Coctails', data: dataCoctails.data},
            {title: 'Shot', data: dataShots.data},
            {title: 'Milk/Float/Shake', data: dataMFS.data},
            {title: 'Coffee/Tea', data: dataCT.data},
            {title: 'Homemade Liqueur', data: dataHomeM.data},
            {title: 'Beer', data: dataBeer.data}
          ]
          })
    }
}
  return (
    < >
      <View style={{flexDirection: 'row', justifyContent:'space-between', marginRight: 5, marginTop: 50, marginBottom: 10, borderBottomWidth: 2, borderBottomColor:'rgba(0, 0, 0, 0.25)', height: 50}}> 
          <HeaderComponent/>
      </View>
      <View style={{flex: 1}}>
        <FlatListComponent allData={allData} onEndHandler={onEndHandler} _scrolled={_scrolled}/>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  
});

export default App;
