import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Platform, Image } from 'react-native';

import profilewhite from './assets/profile.png'
import logo from './assets/abeg.png'
import not from './assets/not.png'


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.topNav}>
      <Image style={styles.topimg} source={profilewhite} />
       <Image source={logo} />
       <Image style={styles.topimg} source={not} />
    </View>
    <View style={styles.price}>
      <Text style={[styles.textWhite, styles.sym]}> N </Text> 
      <Text style={styles.textWhite}> 0</Text> 
    </View>
    <View style= {styles.reas}><Text>What is it for'</Text></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7e3bff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingHorizontal: 20,
    color: 'white'
  },
  topNav: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 30
    
  },
  topimg: {
    width: 30,
    height: 30
  },
  price: {
    flexDirection:"row",
    justifyContent: "center",
    alignItems: 'center'

  },
   textWhite: {
    color: 'white',
    fontSize: 30

  },
  sym: {
    borderRadius: 5,
    backgroundColor: 'rgba(0,0,0,0.07)',
    padding: 7,

  }, 
  reas: {
    flexDirection: 'row',
    justifyContent: "center",
    paddingVertical: 8,
    borderWidth: 1,
    padding: 20,
    borderRadius: 10,
    marginVertical: 20,

    

  }


});
