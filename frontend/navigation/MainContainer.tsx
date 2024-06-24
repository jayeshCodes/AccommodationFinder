import * as React from 'react';
import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import SavedScreen from './screens/SavedScreen';

// Screen names
const homeName : string = 'Home';
const savedName : string = 'Saved';

const Tab : any = createBottomTabNavigator();

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarIcon : ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if(rn === homeName){
                        iconName = focused ? 'home' : 'home-outline';
                    }else if(rn === savedName){
                        iconName = focused ? 'saved' : 'saved-outline';
                    }

                    return <Icon name = {iconName} size = {size} color = {color} />
                },
            })}>
                <Tab.Screen name={homeName} component={HomeScreen} />
                <Tab.Screen name={savedName} component={SavedScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}