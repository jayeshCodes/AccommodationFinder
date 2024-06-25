import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import SavedScreen from './screens/SavedScreen';
import {colors, fonts} from '../assets/theme'

// Screen names
const homeName = 'Home';
const savedName = 'Saved';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === savedName) {
              iconName = focused ? 'bookmark' : 'bookmark-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: colors.activeTab, // Use theme color
          tabBarInactiveTintColor: colors.inactiveTab, // Use theme color
          tabBarStyle: {
            backgroundColor: colors.primaryBackground, // Use theme color
            borderTopWidth: 0, // Remove the top border of the tab bar
            height: 60, // Tab bar height
          },
          tabBarLabelStyle: {
            ...fonts.small, // Use theme font
          },
        })}
      >
        <Tab.Screen name={homeName} component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name={savedName} component={SavedScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
