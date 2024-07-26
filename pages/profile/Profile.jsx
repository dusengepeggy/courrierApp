import React, { useContext } from 'react';
import { View, SafeAreaView, Text, Image } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AntDesign } from '@expo/vector-icons';
import tailwind from 'twrnc';
import { AuthContext } from '../../context/authContext';

const Profile = () => {
  const {logout } = useContext(AuthContext);
  
  return (
    <SafeAreaView style={tailwind`flex-1 bg-white`}>
      <View style={tailwind`px-6 mt-8  mb-6`}>
        <View style={tailwind`flex-row mt-4`}>
          <Image
            source={{ uri: 'https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp' }}
            style={tailwind`w-20 h-20 rounded-full`}
          />
          <View style={tailwind`ml-5`}>
            <Text style={tailwind`text-2xl font-bold mt-4 mb-1`}>John Doe</Text>
            <Text style={tailwind`text-base font-medium text-gray-500`}>@j_doe</Text>
          </View>
        </View>
      </View>

      <View style={tailwind`px-8 mb-6`}>
        <View style={tailwind`flex-row mb-2`}>
          <Icon name="map-marker-radius" color="#777777" size={20} />
          <Text style={tailwind`text-gray-500 ml-5`}>Kolkata, India</Text>
        </View>
        <View style={tailwind`flex-row mb-2`}>
          <Icon name="phone" color="#777777" size={20} />
          <Text style={tailwind`text-gray-500 ml-5`}>+91-900000009</Text>
        </View>
        <View style={tailwind`flex-row mb-2`}>
          <Icon name="email" color="#777777" size={20} />
          <Text style={tailwind`text-gray-500 ml-5`}>john_doe@email.com</Text>
        </View>
      </View>

      <View style={tailwind`mt-2`}>
        <TouchableRipple onPress={() => {}}>
          <View style={tailwind`flex-row py-4 px-8`}>
            <Icon name="heart-outline" color="#0891b2" size={25} />
            <Text style={tailwind`text-gray-500 ml-5 text-lg font-semibold`}>Your Favorites</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={tailwind`flex-row py-4 px-8`}>
            <Icon name="credit-card" color="#0891b2" size={25} />
            <Text style={tailwind`text-gray-500 ml-5 text-lg font-semibold`}>Payment</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={tailwind`flex-row py-4 px-8`}>
            <Icon name="share-outline" color="#0891b2" size={25} />
            <Text style={tailwind`text-gray-500 ml-5 text-lg font-semibold`}>Tell Your Friends</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={tailwind`flex-row py-4 px-8`}>
            <Icon name="account-check-outline" color="#0891b2" size={25} />
            <Text style={tailwind`text-gray-500 ml-5 text-lg font-semibold`}>Support</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={tailwind`flex-row py-4 px-8`}>
            <AntDesign name="setting" color="#0891b2" size={25} />
            <Text style={tailwind`text-gray-500 ml-5 text-lg font-semibold`}>Settings</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={logout}>
          <View style={tailwind`flex-row py-4 px-8`}>
            <AntDesign name="logout" color="#EF444E" size={25} />
            <Text style={tailwind`text-[#EF444E] ml-5 text-lg font-semibold`}>Log out</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
