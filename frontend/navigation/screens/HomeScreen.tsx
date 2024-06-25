import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Hello</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // Takes up the full height of the screen
        justifyContent: 'flex-start', // Ensures children are aligned at the top
    },
    header: {
        backgroundColor: 'black',
        padding: 16, // Adds some padding inside the header
    },
    headerText: {
        color: 'white', // Ensures the text color contrasts with the background
    },
});
