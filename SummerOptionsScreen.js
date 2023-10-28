import { fontWeight } from '@mui/system';
import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';

const SummerOptionsScreen = ({ route, navigation }) => {
    const openExternalLink1 = () => {
        const url='https://www.coursera.org/';
        Linking.openURL(url)
            .then((supported) => {
                if(!supported) {
                    console.error('Opening the URL is not supported.');
                }
            })
            .catch((err) => console.error('An error occurred', err));
    };

    const openExternalLink2 = () => {
        const url='https://www.koppelmangroup.com/blog/2019/11/5/the-best-activities-for-the-summer-after-sophomore-year-of-high-school';
        Linking.openURL(url)
            .then((supported) => {
                if(!supported) {
                    console.error('Opening the URL is not supported.');
                }
            })
            .catch((err) => console.error('An error occurred', err));
    };

    const openExternalLink3 = () => {
        const url='https://wealthofgeeks.com/places-that-hire-at-15/';
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
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
                <Text style={styles.introText}>There are many things you, as a student, can do to prepare for sophomore year. Some things include summer camps, a part time job, or volunteer work. Here are some ideas!</Text>
              <Text style={[styles.headerText, { fontWeight: 'bold' }]}>5 Things You Can do During the Summer</Text>

              <Text style={styles.bullet}>1. Take a Class</Text>
              <Text style={styles.bulletText}>By now, you should have identified some academic interests that could potentially lead to a college major, even if they're still quite broad. Over the summer, consider taking online courses, like those on Coursera, to help narrow down your interests and discover what truly fascinates you.</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.exampleButton} onPress={openExternalLink1}>
                    <Text style={styles.exampleText}>Click Here for Some Ideas</Text>
                </TouchableOpacity>
              </View>

                <Text style={styles.bullet}>2. Attend a Summer Program</Text>
                <Text style={styles.bulletText}>Now that you've identified your interests, it's time to explore. Many colleges offer summer programs in specific fields, and top-tier colleges provide pre-college programs where you can experience college life and potentially earn credit. If you're unsure, we'll link a blog that has posts about various summer programs for different majors.</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.exampleButton} onPress={openExternalLink2}>
                        <Text style={styles.exampleText}>The Blog we Mentioned</Text>
                    </TouchableOpacity>
              </View>

              <Text style={styles.bullet}>3. Tour Colleges </Text>
              <Text style={styles.bulletText}>What does your list of potential colleges currently consist of? Have you even created one yet? It's a crucial step. Afterward, consider going on college tours. While we don't believe these tours are the most critical factor in your decision-making process or finding the perfect school, they can offer you a valuable glimpse into campus life. Keep in mind that these tours are typically led by highly enthusiastic students who aim to showcase their school in the best light, so view them with a critical perspective.</Text>
              
              <Text style={styles.bullet}>4. Intern</Text>
              <Text style={styles.bulletText}>High school internships are often less hands-on, so be selective in choosing one. Look for opportunities with structured work that allows you to make a tangible contribution, which you can later highlight on your resume or in your activities section. Ask questions and aim for experiences that add value.</Text>
              <Text style={styles.bullet}>Be mindful that internships are rare and scoring one in freshman year, even in highschool, is by all means not mandatory or necessary to go to a good college.</Text>

              <Text style={styles.bullet}>5. Get a Job</Text>
              <Text style={styles.bulletText}>Rather than an unpaid internship, consider a paying job – you're eligible at 15-16. Find work related to your interests, even if it requires creative thinking. For instance, if you're into environmental studies, try a nursery or recycling plant job. If business is your thing, explore opportunities at local small businesses or start your own. The key is relevance to your interests.</Text>
              <Text style={styles.bulletText1}>Your summer break provides uninterrupted free time, and you can highlight three of these summers on your college applications. While a perfect plan isn't necessary, taking steps toward your goals is crucial. Colleges value consistency and your commitment to exploring your interests.</Text>
              <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.exampleButton} onPress={openExternalLink3}>
                        <Text style={styles.exampleText}>Potential Jobs for 15 Year Olds</Text>
                    </TouchableOpacity>
              </View>
            </ScrollView>
        </View>
      );
    }

const styles = StyleSheet.create({

      content: {
        padding: 16,
        minHeight: 1200,
      },
    introText:{
        padding: 10,
    }, 
    headerText: {
        padding: 10,
    },
    bullet: {
        fontWeight: 'bold',
        padding: 10,
    },
    bulletText: {
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
    },
    buttonContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    exampleButton:{
        height: 50,
        width: 300,
        backgroundColor: 'lightsteelblue',
        borderRadius: 5,
    },
    exampleText:{
        textAlign: 'center',
        marginTop: 15,
    },
    bulletText1:{
        padding: 10,
    }
})

export default SummerOptionsScreen;
