import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

function CISCollegeScreen({ navigation }) {
    const openExternalLink1 = () => {
        const url='https://www.cischarlotte.org/programs/parent-inquiry-form/';
        Linking.openURL(url);
    };

    const openExternalLink2 = () => {
        const url='https://www.cischarlotte.org/college-and-career-readiness/';
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
            <Text style={styles.title}>CIS College and Career Readiness</Text>
            <Text style={styles.underTitle}>by Communities in Schools</Text>
        </View>
        <View style={styles.mainText}>
            <Text style={styles.firstPara}>One of the ways that we address this at Communities In Schools of Charlotte-Mecklenburg is through our TRiO/Talent Search program and our Educational and Career Coaching (ECC) program, which together provide career exploration and college admissions support services to approximately 2,500 students in Charlotte-Mecklenburg high schools each year.</Text>
            <Text style={styles.secondPara}>Our TRiO/Talent Search program is funded by a grant from the U.S. Department of Education. Annually, more than 70% of students in TRiO/Talent Search at CIS-Charlotte enroll in post-secondary institutions after they graduate high school.  This is attributed to the hands-on approach that our team provides to students – from assistance with understanding financial aid, college tours, and application essay submission, to student enrollment, SAT/ACT preparation, and next steps after college applications are submitted. Under the leadership of TRiO program director Keith Cartwright, students learn how to be competitive once they leave high school and are provided with an ongoing support system to aid their success after graduation.</Text>
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


export default CISCollegeScreen;
