import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Modal, TouchableOpacity } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import ImageZoom from 'react-native-image-pan-zoom';

function FourYearInfoScreen({ route, navigation }) {
  const checkboxTextStyle = {
    fontSize: 13,
    marginLeft: -10,
    color: 'black',
    marginTop: 5,
    padding: 10,
  };

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.checkboxContainer}>
      <BouncyCheckbox
        text="Think about what you'd like to accomplish in high school and set goals accordingly, don't worry this may change over time"
        size={12}
        fillColor="silver"
        unfillColor="lightsteelblue"
        textStyle={checkboxTextStyle}
      />
      <BouncyCheckbox
        text="Meet with your school counselor to make sure you’re taking the right classes"
        size={12}
        fillColor="silver"
        unfillColor="lightsteelblue"
        textStyle={checkboxTextStyle}
      />
      <BouncyCheckbox
        text="Ask your teachers about the types of courses offered by your school and their recommendations"
        size={12}
        fillColor="silver"
        unfillColor="lightsteelblue"
        textStyle={checkboxTextStyle}
      />
      <BouncyCheckbox
        text="Take into account the required classes you need to graduate"
        size={12}
        fillColor="silver"
        unfillColor="lightsteelblue"
        textStyle={checkboxTextStyle}
      />
      <Text style={[styles.exampleText, {fontWeight: 'bold'}]}>
        Here is an Example:
      </Text>
      <Text style={styles.zoomAlert1}>Click the Image to Zoom</Text>
      <TouchableOpacity onPress={openModal}>
        <Image
        style={styles.fourYearImage}
        source={require('C:/Users/PC Owner/CongressionalApp/assets/images/fourYearPlanImage.png')}
        resizeMode='contain'
      />
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType='slide'>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ImageZoom cropWidth={400} cropHeight={350} imageWidth={400} imageHeight={500}>
              <Image
                style={styles.largeImage}
                source={require('C:/Users/PC Owner/CongressionalApp/assets/images/fourYearPlanImage.png')}
                resizeMode='contain'
              />
            </ImageZoom>
            <Text style={styles.zoomAlert}>Feel Free to Zoom in for Easier Viewing</Text>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      
    </View>
  );
}

const styles = StyleSheet.create({
  checkboxContainer: {
    marginTop: 10,
    marginLeft: 5,
  },
  fourYearImage:{
    height:350,
    width:350,
    marginLeft: 15,
  },
  exampleText:{
    marginLeft:125,
    marginTop: 10,
    marginBottom: -10,
  },
  modalContainer:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent:{
    backgroundColor:'white',
    padding:16,
    borderRadius:10,
    alignItems:'center',
  },
  largeImage:{
    width: 400,
    height: 500,
  },
  closeButton:{
    backgroundColor: 'lightsteelblue',
    borderRadius: 5,
    marginTop: 10,
    height:40,
    width:80,
    alignItems:'center',
    justifyContent:'center',
  },
  closeText:{
    fontWeight: 'bold',
  },
  zoomAlert:{
    marginBottom: 10,
  },
  zoomAlert1:{
    marginTop: 20,
    marginLeft: 110,
    marginBottom: -20,
  }
});

export default FourYearInfoScreen;
