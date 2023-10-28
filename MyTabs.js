import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeComponent from './Home';
import ProgramComponent from './Programs';
import RewardComponent from './Rewards';
import RoadmapComponent from './Roadmap';
import RedeemComponent from './Redeem';
import { View } from 'react-native';
import AppNavigator from './AppNavigator'; // Import your AppNavigator
import AppNavigator2 from './AppNavigator2';

import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return(
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen 
            name="Redeem" 
            component={RedeemComponent}
            options={{
                tabBarLabel: 'Redeem',
                tabBarIcon: ({ color }) => (
                    <View style={{marginTop: 10}}>
                        <Icon name='trophy' color={color} size={20} />
                    </View>
                )
            }}
            />
            <Tab.Screen 
            name="Rewards" 
            component={RewardComponent}
            options={{
                tabBarLabel: 'Rewards',
                tabBarIcon: ({ color }) => (
                    <View style={{marginTop: 10}}>
                        <Icon name='pricetags' color={color} size={20} />
                    </View>
                )
            }}
            />
            <Tab.Screen 
            name="Home" 
            component={HomeComponent}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <View style={{marginTop: 5}}>
                        <Icon name='ios-home' color={color} size={size} />
                    </View>
                )
            }}
            />
            <Tab.Screen 
            name="Your Roadmap" 
            component={AppNavigator}
            options={{
                tabBarLabel: 'Your Roadmap',
                tabBarIcon: ({ color }) => (
                    <View style={{marginTop: 10}}>
                        <Icon name='analytics' color={color} size={20} />
                    </View>
                )
            }}
            />
            <Tab.Screen 
            name="Programs" 
            component={AppNavigator2}
            options={{
                tabBarLabel: 'Programs',
                tabBarIcon:({ color}) => (
                    <View style={{ marginTop: 10}}>
                         <Icon name='document-text' color={color} size={20} />
                    </View>
                )
            }}
            />
        </Tab.Navigator>
    );
}

export default MyTabs;