import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';


function RewardComponent({ points }) {
  const[isBookModalVisible, setIsBookModalVisible] = useState(false);
  const[isGiftModalVisible, setIsGiftModalVisible] = useState(false);
  const[isFoodModalVisible, setFoodModalVisible] = useState(false);
  const[isQuestionModalVisible, setQuestionModalVisible] = useState(false);
 
  const toggleBookModal = () => {
    setIsBookModalVisible(!isBookModalVisible);
  };

  const toggleGiftModal = () => {
    setIsGiftModalVisible(!isGiftModalVisible);
  };

  const toggleFoodModal = () => {
    setFoodModalVisible(!isFoodModalVisible);
  };

  const toggleQuestionModal = () => {
    setQuestionModalVisible(!isQuestionModalVisible);
  };


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Featured Rewards</Text>
        <TouchableOpacity onPress={toggleQuestionModal}>
          <Ionicons style={styles.helpIcon} name='help-circle-outline' size={25} color="black"></Ionicons>
          
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        <TouchableOpacity onPress={toggleBookModal}>
          <View style={styles.rectangle}>
            <Text style={styles.prizeText}>A Udemy Gift Card</Text>
            <Image
              source={require("./assets/images/udemyGift.png")}
              style={styles.prizeOneImage}
              resizeMode='contain'
              />
          </View>
        </TouchableOpacity>

        <View style={styles.rectangle}>
          <Text>A Starbucks Gift Card</Text>
          <Image
              source={require("./assets/images/starbucksGift.jpg")}
              style={styles.prizeTwoImage}
              resizeMode='contain'
            />
        </View>
        <View style={styles.rectangle}>
          <Text>Prize #3</Text>
        </View>
      </ScrollView>
      <View style={styles.bottomHalf}>
        <View style={styles.circle}>
          <Text style={styles.circleText}>You have {points} points!</Text>
        </View>
      </View>
      <View style={styles.categories}>
        <Text style={styles.categoriesText}>Categories:</Text>
      </View>
      <View style={styles.categoryBoxContainer}>
        <View style={styles.categoryBox}>
          <TouchableOpacity onPress={toggleBookModal}>
            <Ionicons name="book" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.categoryBox}>
          <TouchableOpacity onPress={toggleGiftModal}>
            <Ionicons name="gift" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.categoryBox}>
          <TouchableOpacity onPress={toggleFoodModal}>
            <Ionicons name="fast-food" size={30} color="black" />
          </TouchableOpacity>  
        </View>
      </View>


      <View style={styles.modal}>
      <Modal
        visible={isBookModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleBookModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalRectangle}>
            <Image
              source={require("./assets/images/barnesandnobles.png")}
              style={styles.bAndNImage}
              resizeMode='contain'
            />
            <Text style={styles.bAndNTitle}>Barnes and Nobles Gift Card</Text>
            <View style={styles.rewardContainer}>
              <View style={styles.bAndNReward}>
                <Text>$10</Text>
              </View>
              <View style={styles.bAndNReward}>
                <Text>$20</Text>
              </View>
              <View style={styles.bAndNReward}>
                <Text>$50</Text>
              </View>
            </View>
          </View>
          <View style={styles.modalRectangle}></View>
          <View style={styles.modalRectangle}></View>
          <TouchableOpacity style={styles.closeButton} onPress={toggleBookModal}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      </View>


<View style={styles.modal}>
  <Modal
    visible={isQuestionModalVisible}
    animationType="slide"
    transparent={true}
    onRequestClose={toggleQuestionModal}
  >
    <View style={styles.questionModalContainer}>
      <Text style={styles.questionModalText}>Wondering how to redeem your points?</Text>
      <Text style={styles.questionModalText}>Points can get you a ton of things ranging from gift cards to college tours!</Text>
      <Text style={styles.questionModalText}>Find something you'd like to buy and cash in your points!</Text>
      <Text style={styles.questionModalText}>10,000 Points earns you a $10 gift card or something of equivalent value</Text>
      <Text style={styles.questionModalText}>20,000 Points earns you a $20 gift card or something of equivalent value</Text>
      <Text style={styles.questionModalText}>and etc.</Text>
    <TouchableOpacity style={styles.closeButton} onPress={toggleQuestionModal}>
      <Text style={styles.closeButtonText}>Close</Text>
    </TouchableOpacity>
    </View>
  </Modal>

      <Modal
        visible={isBookModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleBookModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalRectangle}>
            <Image
              source={require("./assets/images/barnesandnobles.png")}
              style={styles.bAndNImage}
              resizeMode='contain'
            />
            <Text style={styles.bAndNTitle}>Barnes and Nobles Gift Card</Text>
            <View style={styles.rewardContainer}>
              <View style={styles.bAndNReward}>
                <Text>$10</Text>
              </View>
              <View style={styles.bAndNReward}>
                <Text>$20</Text>
              </View>
              <View style={styles.bAndNReward}>
                <Text>$50</Text>
              </View>
            </View>
          </View>

          <View style={styles.modalRectangle}>
          <Image
              source={require("./assets/images/appleGift.png")}
              style={styles.appleImage}
              resizeMode='contain'
            />
            <Text style={styles.appleTitle}>Apple Gift Card</Text>
            <View style={styles.appleRewardContainer}>
              <View style={styles.bAndNReward}>
                <Text>$10</Text>
              </View>
              <View style={styles.bAndNReward}>
                <Text>$20</Text>
              </View>
              <View style={styles.bAndNReward}>
                <Text>$50</Text>
              </View>
            </View>
          </View>

          <View style={styles.modalRectangle}>
          <Image
              source={require("./assets/images/udemyGift.png")}
              style={styles.appleImage}
              resizeMode='contain'
            />
            <Text style={styles.appleTitle}>Udemy Gift Card</Text>
            <View style={styles.appleRewardContainer}>
              <View style={styles.bAndNReward}>
                <Text>$10</Text>
              </View>
              <View style={styles.bAndNReward}>
                <Text>$20</Text>
              </View>
              <View style={styles.bAndNReward}>
                <Text>$50</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.closeButton} onPress={toggleBookModal}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>

        </View>
      </Modal>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  rectangle: {
    height: 200,
    width: 170,
    backgroundColor: 'rgba(176, 196, 222, 0.5)',
    marginTop: 20,
    marginRight: 20, 
    borderRadius: 5,
    marginLeft: 20,

    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    height: 200,
    width: 170,
  },
  header: {
    height: 50,
    width: 390,
    backgroundColor: 'steelblue',

    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 16,
    textAlign: 'center',
    marginLeft: 135,
  },
  helpIcon: {
    marginLeft: 85,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  circle: {
    height: 150,
    width: 150,
    borderRadius: 5,
    backgroundColor: 'rgba(176, 196, 222, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 0,
  },
  circleText: {
    fontSize: 14,
    textAlign: 'center',
  },
  bottomHalf: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  categories: {
    marginBottom: 15,
    marginTop: 30,
  },
  categoriesText: {
    fontSize: 18,
  },
  categoryBoxContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginLeft: 40, 
    marginRight: 20,
    marginBottom: 40,
  },
  prizeOneImage:{
    height: 100,
    width: 150,
  },
  prizeTwoImage:{
    height: 100,
    width: 150,
  },
  categoryBox: {
    width: 100,
    height: 120,
    backgroundColor: 'rgba(176, 196, 222, 0.5)',
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgba(0,0,0,0.7)',
  },
  modalText:{
    fontSize:15,
    color:'black',
    marginBottom:10,
    textAlign:'center',
  },
  closeButton:{
    backgroundColor:'lightsteelblue',
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
    backgroundColor: 'white',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  modalRectangle:{
    borderColor: 'lightgray',
    height: 100,
    width: 350,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
  bAndNImage:{
    height: 80,
    width: 120,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 10,
  },
  bAndNTitle:{
    fontWeight: 'bold',
    marginTop: -80,
    marginLeft: 140,
  },
  rewardContainer:{
    flexDirection: 'row',
    marginLeft: 140,
  },
  bAndNReward:{
    height: 50,
    width: 50,
    borderRadius: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    marginLeft: 10,

    justifyContent: 'center',
    alignItems: 'center',
  },
  appleImage:{
    height: 150,
    width: 160,
    borderRadius: 10,
    marginTop: -25,
    marginLeft: -10,
  },
  appleTitle:{
    fontWeight: 'bold',
    marginTop: -115,
    marginLeft: 140,
  },
  appleRewardContainer:{
    flexDirection: 'row',
    marginLeft: 140,
    marginTop: 0,
  },
  questionModalContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'rgba(0,0,0,0.8)',
  },
  questionModalTitle:{
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  questionModalText:{
    fontSize:15,
    color:'white',
    textAlign:'center',
    padding: 10,
  },
});

const mapStateToProps = (state) => ({
  points: state.points.points,
});

export default connect(mapStateToProps)(RewardComponent);
