import React from 'react'
import { SafeAreaView } from 'react-native' 

import BottomNav from './BottomNav'
import TopNav from './TopNav'

export default function Layout({children}) {

  return(
      <SafeAreaView>
      <TopNav />
        { children }
      <BottomNav />
      </SafeAreaView>
  )
}
