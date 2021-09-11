import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from "../components";

const Stack = createNativeStackNavigator();

export default function HomeStackNavigator() {
     return (
          <Stack.Navigator 
               initialRouteName={'HomeScreen'}>
               <Stack.Screen name={'HomeScreen'} component={HomeScreen} options={{ headerShown: true }} />
          </Stack.Navigator>
     )
}