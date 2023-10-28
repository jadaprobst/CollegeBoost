import React, { useState } from 'react';
import RoadmapComponent from './Roadmap'; // Import your RoadmapComponent

// Import the necessary modules from React Navigation
import { useNavigation } from '@react-navigation/native';

function ParentComponent() {
  const navigation = useNavigation(); // Get the navigation prop using useNavigation
  const [checkboxStates, setCheckboxStates] = useState([false, false, false, false]);

    const updateCheckboxStates = (newCheckboxStates) => {
        setCheckboxStates(newCheckboxStates);
    };
 
  return (
    <RoadmapComponent
      navigation={navigation}
      checkboxStates={checkboxStates}
      setCheckboxStates={setCheckboxStates}
    />
  );
}

export default ParentComponent;
