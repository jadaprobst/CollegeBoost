import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Modal } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';


function ECInfoScreen({ route, navigation }) {
  const checkboxTextStyle = {
    fontSize: 13,
    marginLeft: -10,
    color: 'black',
    marginTop: 5,
    padding: 10,
  };

  const [modalVisible, setModalVisible] = useState(false);

  const handleClickForExample = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
      <View style={styles.bottomText}>
        <Text style={{ fontWeight: 'bold' }}>Getting Started</Text>
        <Text>
          As a freshman, your journey through college begins with commitment and participation. While you might not snag
          leadership roles right away, it's vital to invest your time wisely. Consider your current activities as building
          blocks for your future.
        </Text>
        <View style={styles.secondBullet}>
          <Text style={{ fontWeight: 'bold' }}>Engaging in Activities</Text>
          <Text>
            Upperclassmen usually hold leadership positions, but if you find a passion, focus on showing up. Attend meetings,
            connect with key members, and take on additional responsibilities when possible. Position yourself for future success—it's a waiting game, and your time will come.
          </Text>
        </View>
        <View style={styles.thirdBullet}>
          <Text style={{ fontWeight: 'bold' }}>Creating Your Own Club</Text>
          <Text>
            If your interests aren't met by existing groups, you can form your own club. Gather friends who share your passions and start your own extracurricular group.
          </Text>
        </View>
        <View style={styles.fourthBullet}>
          <Text style={{ fontWeight: 'bold' }}>Balancing Challenges</Text>
          <Text>
            Striking a balance between extracurriculars and academics is crucial. Grades are pivotal for college aspirations, so maintain them. Unless your activity is exceptional, it won't compensate for a significant GPA drop. Freshman year is an opportunity to gauge your limits.
          </Text>
        </View>
        <View style={styles.fifthBullet}>
          <Text style={{ fontWeight: 'bold' }}>Recognizing Limits</Text>
          <Text>
            Freshman year may be busier than ever. If you feel overwhelmed, it's okay to step back. Push yourself, but also know when it's too much.
          </Text>
        </View>
        <View style={styles.sixthBullet}>
          <Text style={{ fontWeight: 'bold' }}>Prioritizing Interests</Text>
          <Text>
            In high school, it's common to trim activities as you progress. Freshman year is a chance to explore your passions. Later, you can decide what truly matters and what to let go.
          </Text>
        </View>
        <View style={styles.seventhBullet}>
          <Text style={{ fontWeight: 'bold' }}>Choosing What Matters</Text>
          <Text>
            If you're involved in various activities, consider which ones align best with your strengths and preferences. It's okay to quit an activity in favor of something more meaningful.
          </Text>
        </View>
        <View style={styles.eighthBullet}>
          <Text style={{ fontWeight: 'bold' }}>Evaluating Your Choices</Text>
          <Text>
            Reflect on your interests, weigh the pros and cons, and ask tough questions about each activity. Don't hesitate to leave some behind—it's all about finding your perfect balance.
          </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => handleClickForExample()}>
            <Text style={styles.buttonText}>Click for an Example</Text>
        </TouchableOpacity>
        <Modal animationType='slide' transparent={true} visible={modalVisible}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    
                    <Image
                        style={styles.activityImage}
                        source={require("C:/Users/PC Owner/CongressionalApp/assets/images/activityImage.png")}
                        resizeMode='contain'
                    />
                    <Text style={styles.underneathText}>As you can see here, the student started out by joining some base level clubs. As they progressed through high school their activities got more serious and advanced. This progression shows colleges that you are capable of improvement!</Text>
                    <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
                        <Text style={styles.closeText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  checkboxContainer: {
    marginTop: 10,
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tipHeader: {
    marginTop: 10,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
    minHeight: 1000,
  },
  secondBullet: {
    marginTop: 20,
  },
  thirdBullet: {
    marginTop: 20,
  },
  fourthBullet: {
    marginTop: 20,
  },
  fifthBullet: {
    marginTop: 20,
  },
  sixthBullet: {
    marginTop: 20,
  },
  seventhBullet: {
    marginTop: 20,
  },
  eighthBullet: {
    marginTop: 20,
  },
  button:{
    backgroundColor:'lightsteelblue',
    alignItems:'center',
    justifyContent:'center',
    padding: 10,
    marginTop: 30,
  },
  buttonText:{
    color:'white',
    fontWeight: 'bold',
  },
  modalContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent:{
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButton:{
    backgroundColor: 'lightsteelblue',
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 10,
    height: 40,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeText: {
    fontWeight: 'bold',
  },
  activityImage:{
    height: 350,
    width: 400,
  }
});

export default ECInfoScreen;
