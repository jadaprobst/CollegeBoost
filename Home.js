import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { connect } from 'react-redux';


function HomeComponent({ navigation, points }) {
  const route = useRoute();
  const programTitleParam = route.params?.programTitle;

  // Use a variable to hold the program title
  let programTitle = programTitleParam || '';

  const isProgramAdded = !!programTitle;

  // Allows the program boxes to take you to the program page
  const handleProgramsButtonClick = () => {
    if (isProgramAdded) {
      navigation.navigate('CISCollege', { programTitle });
    } else {
      navigation.navigate('Programs');
    }
  };

  return (
    <View style={styles.container}>
      {/* Allows the page to scroll */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {/* All of my program rectangles */}
        <View style={styles.rectangleContainer}>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.rectangle}
            onPress={handleProgramsButtonClick}
          >
            <View style={styles.centerContent}>
              {programTitle ? (
                <Text style={styles.programText}>{programTitle}</Text>
              ) : (
                <>
                  <Ionicons style={styles.addIcon} name="add" size={40} color="black" />
                  <Text style={styles.programText}>Add a Program</Text>
                </>
              )}
            </View>
          </TouchableOpacity>
          {/* Add more program boxes using the same logic */}
        </View>
      </ScrollView>
      <View style={styles.bottomRectangle}>
      <Text style={styles.pointText}>You have {points} points, get working!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContent: {
    flexDirection: 'row',
    width: Dimensions.get('window').width * 1.5,
  },
  rectangleContainer: {
    flexDirection: 'row',
  },
  rectangle: {
    height: 250,
    width: 360,
    backgroundColor: 'rgba(176, 196, 222, 0.5)',
    marginHorizontal: 10,
    marginBottom: 320,
    marginTop: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  programText: {
    color: 'black',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 15,
  },
  bottomRectangle: {
    height: 300,
    width: 360,
    backgroundColor: 'darkgray',
    marginBottom: 40,
    borderRadius: 20,
  },
  pointText:{
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 60,
    fontSize: 50,
  }

});

const mapStateToProps = (state) => ({
  points: state.points.points,
});

export default connect(mapStateToProps)(HomeComponent);
