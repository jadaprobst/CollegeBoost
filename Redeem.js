import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback, TouchableOpacityComponent } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Modal } from 'react-native';
import { connect } from 'react-redux';
import { addPoints } from './actions';

function RedeemComponent({ addPoints }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('CIS College and Career Readiness');
  const [completionCode, setCompletionCode] = useState(''); 
  const options = [
    'CIS College and Career Readiness',
    'CPCC College Readiness',
    'Charlotte Mecklenburg College and Career Connections',
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedValue(option);
    setIsOpen(false);
  };

  const handleCompletionCodeSubmit = () => {
    Keyboard.dismiss();
    console.log(completionCode);

    if(completionCode === '1234'){
      toggleModal2();
      addPoints(2);
    } else {
      setIsWrongCodeModalVisible(true);
    }
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [isWrongCodeModalVisible, setIsWrongCodeModalVisible] = useState(false)

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const toggleModal2 = () => {
    setIsModalVisible2(!isModalVisible2);
  };

  const handleSubmit = () => {
    addPoints(200);
    console.log("Success1");
    console.log(completionCode);

    if(completionCode === '1234'){
      toggleModal2();
      addPoints(2);
    } else {
      setIsWrongCodeModalVisible(true);
    }
  };


  

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.centerContainer}>
      <View style={styles.largeRectangle}>
        <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
            setIsModalVisible(false);
        }}
        >
            <View style={styles.modalContainer}>
                <Text style={styles.modalText}>Wondering how to redeem your program points?</Text>
                <Text style={styles.modalText}>Input the type of class you did.</Text>
                <Text style={styles.modalText}>Then, enter your unique completion code so we can ensure that you completed your class!</Text>
                <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
                    <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
            </View>
        </Modal>
        <TouchableOpacity style={styles.question} onPress={toggleModal}>
            <Ionicons name='help-circle-outline' size={20} color="black"></Ionicons>
        </TouchableOpacity>
        <TouchableOpacity style={styles.finishButton} onPress={handleSubmit}>
            <Text styles={styles.submitButton}>Submit</Text>
        </TouchableOpacity>
        <Modal
        visible={isModalVisible2}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleModal2}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Congratulations!</Text>
          <Text style={styles.modalText}>You have successfully earned 200 points.</Text>
          <TouchableOpacity style={styles.closeButton} onPress={toggleModal2}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
        <View style={styles.firstQuestionBox}></View>
        <View style={styles.firstQuestion}>
          <Text>Which program did you complete?</Text>
        </View>
        <TouchableOpacity style={styles.dropdownHeader} onPress={toggleDropdown}>
          <Text style={styles.selectedOption}>{selectedValue}</Text>
          <Ionicons name={isOpen ? 'chevron-up' : 'chevron-down'} size={20} color="black" />
        </TouchableOpacity>
        {isOpen && (
          <View style={styles.optionsContainer}>
            {options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.option}
                onPress={() => handleOptionSelect(option)}
              >
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        <View style={styles.completionCodeBox}>
          <View style={styles.completionCode}>
            <Text>What is your completion code?</Text>
          </View>
          <TextInput
          style={styles.completionCodeInput}
          placeholder="Enter completion code"
          onChangeText={(text) => setCompletionCode(text)}
          value={completionCode}
          keyboardType="numeric" 
          onSubmitEditing={handleCompletionCodeSubmit}
          />

        </View>
        <Modal
            visible={isWrongCodeModalVisible}
            animationType="slide"
            transparent={true}
          >
            <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Uh-oh!</Text>
              <Text style={styles.modalText}>I'm sorry, this code isn't in our system. Did you enter it correctly?.</Text>
              <TouchableOpacity style={styles.closeButton} onPress={() => setIsWrongCodeModalVisible(false)}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </Modal>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  centerContainer: {
    alignItems: 'center',
  },
  largeRectangle: {
    height: 570,
    width: 300,
    backgroundColor: 'lightsteelblue',
    marginTop: 50,
    marginBottom: 50,
    borderRadius: 50,
    position: 'relative',
  },
  finishButton: {
    height: 50,
    width: 200,
    backgroundColor: 'white',
    marginTop: 370,
    marginLeft: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButton:{
    fontSize: 15,
  },
  firstQuestionBox: {
    alignItems: 'center',
    width: 250,
    height: 50,
    backgroundColor: 'white',
    marginTop: -280,
    marginLeft: 25,
    borderRadius: 10,
  },
  firstQuestion: {
    marginTop: -35,
    marginLeft: 40,
  },
  dropdownHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    borderRadius: 5,
    width: 250,
    height: 40,
    marginTop: 30,
    marginLeft: 25,
  },
  selectedOption: {
    flex: 1,
    fontSize: 10,
  },
  optionsContainer: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    width: 250,
    marginTop: 0,
    marginLeft: 25,
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  optionText: {
    fontSize: 10,
  },
  completionCodeBox: {
    alignItems: 'center',
    width: 250,
    height: 100, 
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 25,
  },
  completionCode: {
    marginTop: 15,
    marginLeft: 10,
  },
  completionCodeInput: {
    width: '80%', 
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginTop: 10,
    marginLeft: 10,
  },
  question:{
    marginLeft: 250,
    marginTop: 20,
    marginBottom: -50,
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

});

const mapStateToProps = (state) => ({
  // Map any state you need from Redux
});

const mapDispatchToProps = (dispatch) => ({
  addPoints: (amount) => dispatch(addPoints(amount)), // Dispatch the addPoints action
});

export default connect(mapStateToProps, mapDispatchToProps)(RedeemComponent);