import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Import NavigationContainer
import { createStackNavigator } from '@react-navigation/stack';
import RoadmapComponent from './Roadmap.js';
import FourYearInfo from './roadmapFiles/FourYearInfoScreen.js';
import ExtracurricularScreen from './roadmapFiles/ExtracurricularScreen.js';
import TipsFreshman from './roadmapFiles/TipsFreshman.js';
import SummerOptionsScreen from './roadmapFiles/SummerOptionsScreen.js';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Roadmap" component={RoadmapComponent} />
        <Stack.Screen name="Four Year Plan" component={FourYearInfo} />
        <Stack.Screen name="Freshman Extracurriculars" component={ExtracurricularScreen} />
        <Stack.Screen name="Tips For Freshman" component={TipsFreshman} />
        <Stack.Screen name="SummerOptionsScreen" component={SummerOptionsScreen} /> 
      </Stack.Navigator>
  );
};



export default AppNavigator;
