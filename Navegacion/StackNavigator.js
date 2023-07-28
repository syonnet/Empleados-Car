import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from "../Screens/LoginScreen";
import MenuScreen from "../Screens/MenuScreen";
import RegistrationScreen from "../Screens/RegistrationScreen";
import PersonalInfoScreen from "../Screens/PersonalInfoScreen";
import HistoryScreen from "../Screens/HistoryScreen";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Menu" component={MenuScreen}/>
      <Stack.Screen name="Registration" component={RegistrationScreen}/>
      <Stack.Screen name="History" component={HistoryScreen}/>
      <Stack.Screen name="PersonalInfo" component={PersonalInfoScreen}/>
    </Stack.Navigator>
  );
}

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
