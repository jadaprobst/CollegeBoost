import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
import CISCollege from './programFiles/CISCollege.js';
import CPCCCollegeScreen from './programFiles/CPCCCollege.js';
import CharlotteMeckScreen from './programFiles/CharlotteMeck.js';
import ProgramComponent from './Programs.js';

const Stack = createStackNavigator();

const AppNavigator2 = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Program Options" component={ProgramComponent} />
        <Stack.Screen name="CISCollege" component={CISCollege} />
        <Stack.Screen name="CPCC Screen" component={CPCCCollegeScreen} />
        <Stack.Screen name="Charlotte Mecklenburg Screen" component={CharlotteMeckScreen} />
      </Stack.Navigator>
  );
};

export default AppNavigator2;
