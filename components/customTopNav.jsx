import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


const CustomTopNav = ({list}) => {

    const [activeTab, setActiveTab] = useState(list[0]);  
  return (
    <View style={styles.container}>
        {list.map(tab => (
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

  )
}

export default CustomTopNav


const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent:"space-evenly",
      backgroundColor: '#ff',
      marginVertical:15
    },
    tab: { 
      paddingVertical: 10,
      paddingHorizontal:15,
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
  });
  