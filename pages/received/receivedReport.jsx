import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
import { Icon } from 'react-native-elements'
import TableTemplate from '../../components/table'
import { ScrollView } from 'react-native-gesture-handler'



const RecievedReport = () => {
  const [tableData, setTableData] = useState({
    "Incoming courrier": [
      { index: 1, ticketCode: 'H001' },
      { index: 2, ticketCode: 'H002' },
      { index: 3, ticketCode: 'H003' },
    ],
    'In_transit': [
      { index: 1, ticketCode: 'P001' },
      { index: 2, ticketCode: 'P002' },
      { index: 3, ticketCode: 'P003' },
    ],
    'Delivered': [
      { index: 1, ticketCode: 'S001' },
      { index: 2, ticketCode: 'S002' },
      { index: 3, ticketCode: 'S003' },
    ],
  })

  const [activeTab, setActiveTab] = useState('Incoming courrier');

  const tabs = ['Incoming courrier', 'In_transit', 'Delivered'];


  return (
    <ScrollView style={{backgroundColor:"white"}}>
      <View style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
        <View style={styles.container}>
          {tabs.map(tab => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              style={[
                styles.tab,
                activeTab === tab && styles.activeTab
              ]}
            >
              <Text style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText
              ]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.searchContainer}>
          <Icon name="search" type="font-awesome" size={20} color="#2490A9" />
          <TextInput
            placeholder="Enter your tracking number"
            style={styles.searchInput}
            placeholderTextColor="#c4c4c4"
          />
        </View>

        <TableTemplate tData={tableData[activeTab]} act={activeTab == "Incoming courrier" ? true : false} />
      </View>
    </ScrollView>



  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: "space-evenly",
    backgroundColor: '#ff',
    marginVertical: 15,

  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#f2f2f2',


  },
  activeTab: {
    backgroundColor: '#2490A9',
  },
  tabText: {
    fontSize: 16,
    color: 'black',
  },
  activeTabText: {
    color: '#fff',
  },
  searchContainer: {
    width: "90%",
    alignSelf: "center",
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    marginTop: 16,
    borderColor: "#f2f2f2",
    borderWidth: 1
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
});

export default RecievedReport