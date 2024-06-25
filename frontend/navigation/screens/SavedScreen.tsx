import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SavedScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Saved</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
    },
});
