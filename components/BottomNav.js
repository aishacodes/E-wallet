import React from 'react'
import {StyleSheet, View} from 'react-native'


import AbegIcon from '../components/icons/AbegIcon';
import ArrowIcon from '../components/icons/Arrow';
import HeartIcon from '../components/icons/Heart';
import LockIcon from '../components/icons/lock';
import WalletIcon from '../components/icons/wallet';
import GroupIcon from '../components/icons/group'
import Aicon from '../components/icons/aicon'

export default function BottomNav(){

  return(
     <View style={styles.bottomNav}>
        <LockIcon style={{fill: 'rgba(0,0,0,0.3)'}} />
        <HeartIcon style={{fill: 'rgba(0,0,0,0.3)'}}/>
        <Aicon style={{fill: 'black'}} />
        <GroupIcon style={{fill: 'rgba(0,0,0,0.3)'}}/>
        <WalletIcon style={{fill: 'rgba(0,0,0,0.3)'}}/>
      </View>

  )
}

const styles = StyleSheet.create({
  
 bottomNav: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-around",
    alignContent: "flex-end"
  }

})