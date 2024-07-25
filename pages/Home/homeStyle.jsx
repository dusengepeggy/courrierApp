import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
    //   flex:1 ,
      backgroundColor: '#2490A9',
      paddingHorizontal: Platform.OS === 'ios' ? 18:15,
      paddingTop: Platform.OS === 'ios'? 36:32,
    },
    header: {
     paddingTop: Platform.OS === 'ios' ? 18:15,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    profileImage: {
      width: 40,
      height: 40,
      borderRadius: 20,
    },
    locationContainer: {
    //   flex: 1,
    },
    location: {

      color: '#ffffff',
      fontSize: 12,
      fontWeight: 'bold',
    },
    subLocation: {
      color: '#ffffff',
      fontSize: 12,
    },
    title: {
    
      color: '#ffffff',
      fontSize: 18,
      marginTop: 20,
      paddingHorizontal: Platform.OS === 'ios' ? 18:4,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      borderRadius: 10,
      padding: 10,
      marginTop: 16,
    },
    searchInput: {
      flex: 1,
      marginLeft: 10,
    },
    relativeContainer: {
        position: 'relative',
        height: 80, // Ensure this height is enough to accommodate the menu container
        marginTop: 20,
        zIndex: 1,
      },
      menuContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#FFFFFF',
        padding: 24,
        borderRadius: 10,
        position: 'absolute',
        top: 0, // Ensure the menu is positioned at the top of the relative container
        left: 0,
        right: 0,
        zIndex: 2,
      },
      menuItem: {
        alignItems: 'center',
      },
      menuText: {
        marginTop: 5,
        fontSize: 12,
        fontWeight: '500',
      },
  });