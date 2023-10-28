import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ProgramComponent({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPrograms, setFilteredPrograms] = useState([]);

  const [programData, setProgramData] = useState([
    { id: 1, name: 'CIS College and Career Readiness', description: 'One of the ways that we address this at Communities In Schools of Charlotte-Mecklenburg is through our TRiO/Talent Search program and our Educational and Career Coaching (ECC) program, which together provide career exploration and college admissions support services to approximately 2,500 students in Charlotte-Mecklenburg high schools each year.'},
    { id: 2, name: 'CPCC College Readiness', description: 'Finish high school. Get job training and work experience. Learn English. Enhance your independent living skills. Whatever your goal, your success is our priority.'},
    { id: 3, name: 'Charlotte Mecklenburg Library College and Career Connections', description: 'Charlotte Mecklenburg Library has been offering college and career readiness programs, resources, and services for over a decade. Designed for teens ages 12 to 18, our College & Career Connections suite includes free programs and workshops offered by community experts and organizations such as the College Foundation of North Carolina (CFNC) and the Princeton Review. Topics range from resources to pay for college, admissions essays, test prep, and online practice tests.'},
    // Add more program data here...
  ]);

  const [programStates, setProgramStates] = useState(programData.map(() => false));


  const navigateToScreen = (index) => {
    const screens = ['CISCollege', 'CPCC Screen', 'Charlotte Mecklenburg Screen'];
    navigation.navigate(screens[index]);
  };

  const handleSearch = () => {
    const filtered = programData.filter((program) =>
      program.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPrograms(filtered);
  };

  const addProgram = () => {
    const firstAvailableIndex = programStates.findIndex((state) => !state);
  
    if (firstAvailableIndex !== -1) {
      const updatedProgramStates = [...programStates];
      updatedProgramStates[firstAvailableIndex] = true;
      setProgramStates(updatedProgramStates);
  
      // Pass the program title to the Home screen
      navigation.navigate('Home', { programTitle: programData[firstAvailableIndex].name });
    }
  };
  const removeProgram = (index) => {
    const updatedProgramStates = [...programStates];
    updatedProgramStates[index] = false;
    setProgramStates(updatedProgramStates);

    // Remove the program title from the Home screen
    navigation.navigate('Home', { programTitle: '' });
  };

  useEffect(() => {
    setFilteredPrograms(programData);
  }, [programData]);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search programs"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {filteredPrograms.map((program, index) => (
          <View key={program.id} style={styles.rectangle}>
            <Text style={styles.programName}>{program.name}</Text>
            <Text style={styles.programDescription}>{program.description}</Text>
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={() => navigateToScreen(index)}>
                <Ionicons style={styles.icon} name="help-outline" size={20} color="gray" />
              </TouchableOpacity>
              {!programStates[index] ? (
                <TouchableOpacity onPress={addProgram}>
                  <Ionicons style={styles.add} name="add-circle" size={20} color="gray" />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => removeProgram(index)}
                >
                  <Ionicons style={styles.remove} name="remove-circle" size={20} color="gray" />
                </TouchableOpacity>
              )}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingLeft: 8,
    marginRight: 8,
  },
  searchButton: {
    backgroundColor: 'lightsteelblue',
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rectangle: {
    minHeight: 250,
    width: 350,
    backgroundColor: 'rgba(176, 196, 222, 0.5)',
    borderRadius: 20,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 20,
    padding: 16,
  },
  programName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  programDescription: {
    fontSize: 14,
    color: 'black',
    marginTop: 10,
    marginBottom: 0,
    height: 180,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  add: {
    marginLeft: 220,
  },
  remove: {
    marginLeft: 200,
  }
});
