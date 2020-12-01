import React from 'react'
import {StyleSheet, View, Image} from 'react-native'


import profilewhite from '../assets/profile.png';
import not from '../assets/not.png';


export default function TopNav({title}){

  return(
      <View style={styles.topNav}>
        <Image style={styles.topimg} source={profilewhite} />
        {title}
        <Image style={styles.topimg} source={not} />
      </View>

  )
}

const styles = StyleSheet.create({
 topNav: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  topimg: {
    width: 30,
    height: 30,
  },
  
})