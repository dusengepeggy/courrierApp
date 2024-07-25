import { AntDesign, Feather,MaterialIcons,MaterialCommunityIcons } from "@expo/vector-icons";

export const icons = {
    Home: (props)=> <AntDesign name="home" size={20} {...props} />,
    Recieve: (props)=> <MaterialIcons name="delivery-dining" size={20} {...props} />,
    Manifier: (props)=> <Feather name="compass" size={20} {...props} />,
    Sendcourrier: (props)=> <MaterialCommunityIcons name="send-circle" size={20} {...props} />,
    profile: (props)=> <AntDesign name="user" size={20} {...props} />,
}