// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ActivityScreen from './screens/ActivityScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Activity">
        <Stack.Screen 
          name="Activity" 
          component={ActivityScreen} 
          options={{ title: 'Activity Tracker' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
