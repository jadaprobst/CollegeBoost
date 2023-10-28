import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

function CMScreen() {
  const openExternalLink1 = () => {
    const url='https://cmlibrary.bibliocommons.com/v2/events?q=my%20next%20step';
    Linking.openURL(url)
        .then((supported) => {
            if(!supported) {
                console.error('Opening the URL is not supported.');
            }
        })
        .catch((err) => console.error('An error occurred', err));
};

const openExternalLink2 = () => {
    const url='https://www.cmlibrary.org/college-career-connections';
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
        <Text style={styles.title}>Charlotte Mecklenburg College & Career Connections</Text>
        <Text style={styles.underTitle}>by the Charlotte Mecklenburg Library</Text>
    </View>
    <View style={styles.mainText}>
        <Text style={styles.firstPara}>Charlotte Mecklenburg Library has been offering college and career readiness programs, resources, and services for over a decade. Designed for teens ages 12 to 18, our College & Career Connections suite includes free programs and workshops offered by community experts and organizations such as the College Foundation of North Carolina (CFNC) and the Princeton Review. Topics range from resources to pay for college, admissions essays, test prep, and online practice tests.</Text>
        <Text style={styles.secondPara}>We offer My Next Step programs led by Library staff that allow you to get personalized assistance in creating Your Road Map to Success. The Library also offers volunteer opportunities through our year-round VolunTeen initiative at all of our branch locations, in addition to virtual volunteering. You can also earn community service hours at select programs.</Text>
    </View>
    <View style={styles.nextSteps}>
        <Text style={styles.boldText}>Next Steps</Text>
    </View>
    <View style={styles.apply}>
        <TouchableOpacity style={styles.applyBtn} onPress={openExternalLink1}>
            <Text>Apply Here!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.applyBtn} onPress={openExternalLink2}>
            <Text>The Program's Website</Text>
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

export default CMScreen;
