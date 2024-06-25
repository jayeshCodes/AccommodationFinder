import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, fonts } from '../../assets/theme'; // Import the theme

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Hello</Text>
      </View>
      <View style={styles.listingContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Takes up the full height of the screen
    justifyContent: 'flex-start', // Ensures children are aligned at the top
    backgroundColor: colors.primaryBackground, // Use theme color
  },
  header: {
    backgroundColor: colors.primaryBackground, // Use theme color
    padding: 16, // Adds some padding inside the header
  },
  headerText: {
    color: colors.primaryText, // Use theme color
    ...fonts.header, // Use theme font
  },
  listingContainer: {
    backgroundColor: colors.secondaryBackground, // Use theme color
    flex: 1,
  },
});
