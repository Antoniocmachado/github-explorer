import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../pages/Home';
import { Details } from "../pages/Details";
import { Header } from "react-native/Libraries/NewAppScreen";
export function Routes(){
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Home'
                screenOptions={{
                    headerShown:false,
                }}
            >
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Details' component={Details} />
            </Stack.Navigator>           
        </NavigationContainer>
    )
}