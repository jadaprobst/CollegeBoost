import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity, Modal, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { connect } from 'react-redux';
import { addPoints } from './actions';

function RoadmapComponent({ navigation, addPoints, checkboxStates, setCheckboxStates }) {
  const colors = ['steelblue', 'lightblue', 'lightsteelblue', 'slategray'];
  const numCircles = colors.length;
  const iconNames = ['list', 'flask', 'trophy', 'sunny'];
  const iconNames2 = ['warning', 'repeat', 'reload-outline', 'document-text'];

  const [normalTouchedCircles, setNormalTouchedCircles] = useState(Array(numCircles).fill(false));
  const [reversedTouchedCircles, setReversedTouchedCircles] = useState(Array(numCircles).fill(false));
  const [selectedCircleIndex, setSelectedCircleIndex] = useState(null);
  const [reversedCircleIndex, setReversedCircleIndex] = useState(null);
  const [addIconIndex, setAddIconIndex] = useState(null);
  const [markedAsDone, setMarkedAsDone] = useState(Array(numCircles).fill(false));

  const informationTexts = [
    'Make a 4 Year Plan',
    'Look For Extracurricular Activities',
    'Tips for Highschool',
    'Explore Summer Options',
  ];

  const handleCircleTouch = (index) => {
    setSelectedCircleIndex(index);
    setReversedCircleIndex(null);
    setAddIconIndex(null);
  };

  const handleCircleTouchReversed = (index) => {
    setReversedCircleIndex(index);
    setSelectedCircleIndex(null);
    setAddIconIndex(null);
  };

  const handleCloseModal = () => {
    setSelectedCircleIndex(null);
    setReversedCircleIndex(null);
    setAddIconIndex(null);
  };

  const handleAddIconPress = () => {
    if (selectedCircleIndex === 0) {
      navigation.navigate('Four Year Plan');
    } else if (selectedCircleIndex === 1) {
      navigation.navigate('Freshman Extracurriculars');
    } else if (selectedCircleIndex === 2) {
      navigation.navigate('Tips For Freshman');
    } else if (selectedCircleIndex === 3) {
      navigation.navigate('SummerOptionsScreen');
    }
    handleCloseModal();
  };

  const [checkedCircles, setCheckedCircles] = useState(Array(numCircles).fill(false));

  const handleCheckBox = (index) => {
    if (!markedAsDone[index]) {
      const newNormalTouchedCircles = [...normalTouchedCircles];
      newNormalTouchedCircles[index] = true;
      setNormalTouchedCircles(newNormalTouchedCircles);
      setMarkedAsDone((prev) => {
        const updatedMarkedAsDone = [...prev];
        updatedMarkedAsDone[index] = true;
        return updatedMarkedAsDone;
      });

      addPoints(50);
      console.log("Success");
    }
  };

  const checkboxTextStyle = {
    fontSize: 13.5,
    marginLeft: -10, 
    color: 'black',
  };

  const [isQuestionModalVisible, setIsQuestionModalVisible] = useState(false);

  const toggleQuestionModal = () => {
    setIsQuestionModalVisible(!isQuestionModalVisible);
  };

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
      
      <Modal
        visible={isQuestionModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleQuestionModal}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>How to Get Started</Text>
          <Text style={styles.modalText}>Your roadmap is similar to a checklist of things that will help prepare you for college!</Text>
          <Text style={styles.modalText}>Each roadmap task has a 'More Info' option that will tell you more about the task at hand.</Text>
          <Text style={styles.modalText}>When you complete the task press 'Mark as Complete' to earn 50 points!</Text>
          <TouchableOpacity style={styles.closeButton} onPress={toggleQuestionModal}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <View style={styles.squiggleContainer}>
        {colors.map((color, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.circle,
              { backgroundColor: normalTouchedCircles[index] ? color : 'gray', left: index * 60 },
            ]}
            onPress={() => handleCircleTouch(index)}
          >
            <View style={styles.centerContent}>
              <Ionicons
                name={iconNames[index]}
                size={30}
                color={normalTouchedCircles[index] ? 'white' : 'black'}
              />
            </View>
          </TouchableOpacity>
        ))}
        {colors.map((color, index) => (
          <TouchableOpacity
            key={`reverse-${index}`}
            style={[
              styles.circle,
              {
                backgroundColor: reversedTouchedCircles[index] ? color : 'gray',
                left: (numCircles - index - 1) * 60 + 55,
              },
            ]}
            onPress={() => handleCircleTouchReversed(index)}
          >
            <View style={styles.centerContent}>
              <Ionicons
                name={iconNames2[index]}
                size={30}
                color={reversedTouchedCircles[index] ? 'white' : 'black'}
              />
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity onPress={toggleQuestionModal}>
        <Ionicons name='help-circle-outline' size = {25} style={styles.helpIcon} ></Ionicons>
      </TouchableOpacity>
      {selectedCircleIndex !== null && (
        <Modal animationType="slide" transparent={true} visible={selectedCircleIndex !== null}>
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              <Text style={styles.buttonInfo}>{informationTexts[selectedCircleIndex]}</Text>
              <View style={styles.bottomContainer}>
                <View style={styles.checkboxContainer}>
                  <BouncyCheckbox
                    text="Mark as Done"
                    style={styles.checkBox}
                    size={12}
                    fillColor='silver'
                    onPress={() => handleCheckBox(selectedCircleIndex)}
                    textStyle={checkboxTextStyle}
                  />
                </View>
                <View style={styles.addIconContainer}>
                <Ionicons
                  style={styles.addIcon}
                  name="add-circle"
                  size={15}
                  color="silver"
                  onPress={handleAddIconPress}
                />
                <TouchableOpacity style={styles.addIconText} onPress={handleAddIconPress}>
                  <Text>
                    More Info
                  </Text>
                </TouchableOpacity>
              </View>
              </View>
              <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
                <Text style={styles.closeText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
  

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  squiggleContainer: {
    height: 100,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginHorizontal: 10,
    marginVertical: 10,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
    minHeight: 1000,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    height: 170,
    width: 200,
    justifyContent: 'center',
    textAlign: 'center',
  },
  buttonInfo: {
    marginTop: -10,
    marginBottom: 10,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: 'lightsteelblue',
    borderRadius: 5,
    marginTop: 20,
    marginBottom: -10,
    height: 20,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addIcon: {
    marginTop: 10,
    marginRight: 3,
    marginLeft: 4,
  },
  addIconText:{
    fontSize: 8,
    marginTop: 10,
  },
  addIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -70,
  },
  checkboxContainer: {
    marginRight: 40,
    marginTop: 10,
  },
  checkBox: {
    fontSize: 10,
  },
  bottomContainer:{
    alignContent: 'center',
  },
  ninthGrade:{
    height: 300,
    marginLeft: 20,
    marginTop: -130,
  },
  modalContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgba(0,0,0,0.7)',
  },
  modalText:{
    fontSize:15,
    color:'white',
    marginBottom:10,
    textAlign:'center',
    padding: 10,
  },
  closeButton:{
    backgroundColor:'white',
    padding:10,
    borderRadius:5,
    marginTop:20,
  },
  closeButtonText:{
    fontSize:16,
    color:'black',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  helpIcon:{
    marginLeft: 330,
    marginBottom: -30,
    marginTop: -100,
    position: 'absolute',
  }
});

const mapDispatchToProps = (dispatch) => ({
  addPoints: (amount) => dispatch(addPoints(amount)),
});

export default connect(null, mapDispatchToProps)(RoadmapComponent);