import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

const TipsFirstDay = ({ route, navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
                <Text>Students will face both social and academic changes as they move into their final four years of compulsory schooling, including increased accountability for their academics and time management. </Text>
                <Text style={styles.tipLine}>Here are 10 tips from experts to ease the adjustment from middle school to high school.</Text>
                <View style={styles.bulletList}>
                    <Text style={styles.bullet}>1. Learn the School</Text>
                    <Text style={styles.bulletText}>Attend freshman orientation to familiarize yourself with the building, classrooms, and meet your peers and teachers. Practice opening your locker if you have one.</Text>

                    <Text style={styles.bullet}>2. Challenge Yourself</Text>
                    <Text style={styles.bulletText}> Select classes that are academically challenging but manageable, considering your home responsibilities and extracurricular activities.</Text>

                    <Text style={styles.bullet}>3. Pick Classes of Interest</Text>
                    <Text style={styles.bulletText}> Whenever possible, choose classes that align with your interests and passions. Electives offer a great opportunity for exploration.</Text>

                    <Text style={styles.bullet}>4. Get Organized</Text>
                    <Text style={styles.bulletText}> High school brings more assignments and deadlines. Use an online or paper calendar, or get a planner to stay organized.</Text>

                    <Text style={styles.bullet}>5. Connect with Upperclassmen</Text>
                    <Text style={styles.bulletText}> Seek mentorship or friendship with older students who can offer guidance and share their experiences.</Text>

                    <Text style={styles.bullet}>6. Stay True to Your Values</Text>
                    <Text style={styles.bulletText}> Resist peer pressure and stay true to your values and passions as you navigate high school's social landscape.</Text>

                    <Text style={styles.bullet}>7. Connect Through Activities</Text>
                    <Text style={styles.bulletText}> Attend school events, join clubs, honor societies, or volunteer to make connections within the school community. Be selective to avoid overcommitment.</Text>

                    <Text style={styles.bullet}>8. Build Relationships with Teachers and Staff</Text>
                    <Text style={styles.bulletText}> Take time to get to know your teachers and counselors as these relationships can be valuable for your academic journey.</Text>

                    <Text style={styles.bullet}>9. Prioritize Mental Health</Text>
                    <Text style={styles.bulletText}> Don't hesitate to seek help if needed; schools provide mental health resources and services. Take care of your mental, physical, and social well-being. Don't hesitate to seek help if needed; schools provide mental health resources and services. Take care of your mental, physical, and social well-being.</Text>

                    <Text style={styles.bullet}>10. Be Present</Text>
                    <Text style={styles.bulletText}> While planning for the future is important, don't forget to enjoy your high school years. Make the most of this time and stay in the moment.</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        padding: 10,
    },
    tipLine: {
        marginTop: 10,
    },
    italic: { fontStyle: 'italic' },
    bold: { fontWeight: 'bold' },
    bulletList: {
        marginTop: 10,
    },
    bullet: {
        fontWeight: 'bold',
        marginTop: 10,
    },
    bulletText: {
        marginTop: 10,
    },
})

export default TipsFirstDay;
