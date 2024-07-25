import React from 'react'
import tailwind from 'twrnc'
import { styles } from '../pages/Home/homeStyle'
import { View, Text, Image, TextInput, Pressable } from 'react-native'
import { Icon } from 'react-native-elements'
import { DrawerActions } from '@react-navigation/native'



function TopBarHome({ navigation }) {
  return (
    <View style={tailwind``}>
      <View style={styles.container}>
        <View style={tailwind`flex mt-3 flex-row gap-4 justify-between `}>
          <Pressable
            style={tailwind`border border-white flex rounded-full justify-center `}
          >
            <Image
              source={require('../assets/logo.png')}
              style={styles.profileImage}
            />
          </Pressable>
          <View style={styles.locationContainer}>
            <Text style={styles.location}>Noida Sector 75</Text>
            <Text style={styles.subLocation}>Golf city, Plot 8, Sector 75</Text>
          </View>
          <View style={tailwind`border border-white/20 flex rounded-full justify-center w-[40px] h-[40px]`} >
            <Icon name="bell" type="font-awesome" size={16} color="#ffffff" />
          </View>
        </View>
        <Text style={styles.title}>Let's Dilvery Your Package</Text>
        <View style={styles.searchContainer}>
          <Icon name="search" type="font-awesome" size={20} color="#2490A9" />
          <TextInput
            placeholder="Enter your tracking number"
            style={styles.searchInput}
            placeholderTextColor="#c4c4c4"
          />
        </View>
        <View style={styles.relativeContainer}>
          <View style={styles.menuContainer}>
            <Pressable style={styles.menuItem}>
              <Image source={require('../assets/menu/fi_5002828.png')} />
              <Text style={styles.menuText}>Check Rate</Text>
            </Pressable>
            <Pressable style={styles.menuItem}>
              <Image source={require('../assets/menu/fi_3338557.png')} />
              <Text style={styles.menuText}>Pick Up</Text>
            </Pressable>
            <Pressable style={styles.menuItem}>
              <Image source={require('../assets/menu/fi_3649223.png')} />
              <Text style={styles.menuText}>Drop Off</Text>
            </Pressable>
            <Pressable style={styles.menuItem}>
              <Image source={require('../assets/menu/fi_4228724.png')} />
              <Text style={styles.menuText}>History</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  )
}

export default TopBarHome
