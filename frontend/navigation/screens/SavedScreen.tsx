import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, fonts } from '../../assets/theme'; // Import the theme

export default function SavedScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Save</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryBackground, // Use theme color
  },
  heading: {
    color: colors.primaryText, // Use theme color
    ...fonts.header, // Use theme font
  },
});
