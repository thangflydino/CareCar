import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'react-native-collapsible-tab-view'
const MyTabs2 = () => {
  return (
    <Tabs.Container renderHeader={MyHeader}>
       <Tabs.Tab name="A">
         <ScreenA />
       </Tabs.Tab>
       <Tabs.Tab name="B">
         <ScreenB />
       </Tabs.Tab>
     </Tabs.Container>
  )
}

export default MyTabs2

const styles = StyleSheet.create({})