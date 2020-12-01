import { Link } from 'react-router-native'
import React from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  Image,
  KeyboardAvoidingView,
  TouchableHighlight,
  TouchableNativeFeedback,
} from 'react-native';

import AbegIcon from '../components/icons/AbegIcon';
import ArrowIcon from '../components/icons/Arrow';
import HeartIcon from '../components/icons/Heart';
import LockIcon from '../components/icons/lock';
import WalletIcon from '../components/icons/wallet';
import GroupIcon from '../components/icons/group'
import Aicon from '../components/icons/aicon'

import profilewhite from '../assets/profile.png';
import not from '../assets/not.png';

const Touchable =
  Platform.OS === 'android' ? TouchableNativeFeedback : TouchableHighlight;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topNav}>
        <Image style={styles.topimg} source={profilewhite} />
        <AbegIcon />
        <Image style={styles.topimg} source={not} />
      </View>
      <View style={styles.price}>
        <Text style={[styles.textWhite, styles.sym]}> ₦ </Text>
        <Text style={styles.textWhite}> 0</Text>
      </View>
      <TextInput placeholder="What is it for?" placeholderTextColor= "white" style={styles.reas} />
      <View style={styles.numgrid}>
        <View style={styles.num}>
          <Text style={styles.numText}>1</Text>
          <Text style={styles.numText}>2</Text>
          <Text style={styles.numText}>3</Text>
        </View>
        <View style={styles.num}>
          <Text style={styles.numText}>4</Text>
          <Text style={styles.numText}>5</Text>
          <Text style={styles.numText}>6</Text>
        </View>
        <View style={styles.num}>
          <Text style={styles.numText}>7</Text>
          <Text style={styles.numText}>8</Text>
          <Text style={styles.numText}>9</Text>
        </View>
        <View style={styles.num}>
          <Text style={styles.numText}>00</Text>
          <Text style={styles.numText}>0</Text>
          <ArrowIcon/>
        </View>
      </View>
      <View style={styles.actions}>
        <Touchable onPress={() => console.log('how mosh')}>
          <Text style={styles.action}>REQUEST</Text>
        </Touchable>
        <Touchable>
          <Text style={styles.action}>SEND</Text>
        </Touchable>
      </View>
      <View style={styles.bottomNav}>
        <Link to="matchStore" >
          <LockIcon style={{fill: 'rgba(0,0,0,0.3)'}} />
        </Link>
        <Link to="fundraising" >
          <HeartIcon style={{fill: 'rgba(0,0,0,0.3)'}}/>
        </Link>
          <Aicon style={[styles.aiicon, {fill:"white"}]} />
        <Link to="ajo" >
          <GroupIcon style={{fill: 'rgba(0,0,0,0.3)'}}/>
        </Link>
        <Link to="wallet" >
          <WalletIcon style={{fill: 'rgba(0,0,0,0.3)'}}/>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7e3bff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingBottom: StatusBar.currentHeight/2,
    color: 'white'
  },
  topNav: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topimg: {
    width: 30,
    height: 30,
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10
  },
  textWhite: {
    color: 'white',
    fontSize: 30,
  },
  sym: {
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.07)',
    padding: 7,
  },
  reas: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 30,
    marginVertical: 30,
    marginHorizontal: '20%',
    borderColor: 'white',
    color: 'white',
  },
  numgrid: {
    // marginHorizontal: 10,
    flex: 1,
    justifyContent: 'space-between',
  },
  num: {
    flexDirection: 'row',
    justifyContent: "space-around"

  },
  numText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center',
  },
  actions: {
    flexDirection: 'row',
    paddingRight: 20,
    paddingLeft: 30,
    paddingVertical: 10
  },
  action: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginRight: 10,
    backgroundColor: 'rgba(0,0,0,0.07)',
    borderRadius: 20,
    color: 'white',
    textAlign: 'center',
    marginTop: 10
  },
  bottomNav: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-around",
    alignContent: "flex-end"
  }, 
  aiicon: {
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.07)',
    padding: 7,
  }
});
