import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

function CPCCCollege() {
  const openExternalLink1 = () => {
    const url='https://www.collegiatetestprep.com/courses/college-readiness/';
    Linking.openURL(url)
        .then((supported) => {
            if(!supported) {
                console.error('Opening the URL is not supported.');
            }
        })
        .catch((err) => console.error('An error occurred', err));
};

return (
<View style={styles.container}>
    <View style={styles.topHalf}>
        <Text style={styles.title}>CPCC Collegiate Test Prep</Text>
        <Text style={styles.underTitle}>by Central Piedmont Community College</Text>
    </View>
    <View style={styles.mainText}>
        <Text style={styles.firstPara}>This 4-part College Readiness Series  will assist students through the journey of choosing a college and applying for admission. If students are unsure of where to begin, the curriculum and activities will provide many useful tools to help them get started. Topics will include exploring school choices, investigating majors, beginning the Common Application, creating a personal statement essay, applying for financial aid (including a parent Q&A session), and planning college tours. </Text>
        <Text style={styles.secondPara}>Skills learned in this series will put college application resources within easy reach and students will gain familiarity with the application process. The final class will include a college tour of UNC Charlotte, therefore local transportation will be required. </Text>
    </View>
    <View style={styles.nextSteps}>
        <Text style={styles.boldText}>Next Steps</Text>
    </View>
    <View style={styles.apply}>
        <TouchableOpacity style={styles.applyBtn} onPress={openExternalLink1}>
            <Text>Apply Here!</Text>
        </TouchableOpacity>
    </View>
</View>
);
}

const styles = StyleSheet.create({
  title:{
      marginLeft: 10,
      fontSize: 20,
      marginTop: 10,
  },
  underTitle:{
      marginLeft:10,
      fontSize: 15,
  },
  firstPara:{
      padding: 10,
  },
  secondPara:{
      padding:10,
  },
  apply:{
      alignItems: 'center',
      justifyContent: 'center',
  },
  applyBtn:{
      marginTop: 20,
      height: 50,
      width: 300,
      backgroundColor: 'lightsteelblue',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
  },
  boldText:{
      fontWeight: 'bold',
      fontSize: 15,
  },
  nextSteps: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
  }
})


export default CPCCCollege;
