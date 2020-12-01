import React from 'react'
import { NativeRouter, Route, Link } from 'react-router-native'
import { View, Text, SafeAreaView, StyleSheet, StatusBar, Platform } from 'react-native'

import TransactionScreen from './screens/TransactionScreen'
import MerchStore from './screens/MerchStore'
import Fundraising from './screens/Fundraising'

export default function App(){

  return(
    <NativeRouter>
      <SafeAreaView  style={styles.wrapper}>
        <Route path="/merchStore" component={MerchStore}/>
        <Route path="/fundraising" component={Fundraising}/>
        <Route path="/ajo" component={TransactionScreen}/>
        <Route path="/wallet" component={TransactionScreen}/>
        <Route path="/" exact component={TransactionScreen}/>
      </SafeAreaView>
    </NativeRouter>
    
  )
} 

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
})