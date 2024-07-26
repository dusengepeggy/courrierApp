import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import RecievePage from "../pages/received/recievePage";
import RecievedReport from "../pages/received/receivedReport";

const TopNav= createMaterialTopTabNavigator()

const ReceiverTopNav = () => {
    return (
        <TopNav.Navigator 
          screenOptions={{
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor:"white",
            tabBarStyle: { backgroundColor: '#0891b2',paddingTop: 40},
            tabBarIndicatorStyle: {
              backgroundColor: '#fff', 
              height: 3, 
              width:"24%",
              alignSelf:"center",
              borderRadius: 10,
              marginLeft:"13%"
            },
          }}
        >
            <TopNav.Screen name="Received" component={RecievePage}    />
            <TopNav.Screen name="Report" component={RecievedReport} />
        </TopNav.Navigator>
    );
}

export default ReceiverTopNav;