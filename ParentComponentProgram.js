import { Ionicons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function ProgramComponent() {
  // ... (your existing code)

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProgramList">
        <Stack.Screen
          name="ProgramList"
          component={ProgramList}
          initialParams={{ programData }}
        />
        <Stack.Screen
          name="ProgramDetail"
          component={ProgramDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function ProgramList({ navigation, route }) {
  const { programData } = route.params;
  // ... (your existing code)

  return (
    <ScrollView>
      {filteredPrograms.map((program) => (
        <View key={program.id} style={styles.rectangle}>
          <Text style={styles.programName}>{program.name}</Text>
          <Text style={styles.programDescription}>{program.description}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('ProgramDetail', { programId: program.id })}>
            <Ionicons style={styles.icon} name="add-circle" size={20} color="gray" />
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}
