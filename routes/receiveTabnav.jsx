import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import RecievePage from "../pages/received/recievePage";
import RecievedReport from "../pages/received/receivedReport";

const TopNav= createMaterialTopTabNavigator()

const ReceiverTopNav = () => {
    return (
        <TopNav.Navigator 
        screenOptions={{
            tabBarActiveTintColor: '#2490A9',
            tabBarInactiveTintColor:"gray",
            tabBarStyle: { backgroundColor: '#fff' },
            tabBarIndicatorStyle: {
              backgroundColor: '#2490A9', 
              height: 3, 
              width:"24%",
              alignSelf:"center",
              borderRadius: 10,
              marginLeft:"13%"
            },
            


          }}
        >
            <TopNav.Screen name="Received" component={RecievePage}   />
            <TopNav.Screen name="Report" component={RecievedReport} />
        </TopNav.Navigator>
    );
}

export default ReceiverTopNav;