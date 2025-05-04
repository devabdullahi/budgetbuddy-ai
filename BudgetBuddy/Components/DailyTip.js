import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DailyTip = () => {
    var generatedTip = "try the 50/20/10 rule";
    return(
        <View style={styles.container}>
            <View style={styles.TipBox}>
                <View style={styles.titleContainer}>
                    <Icon name="bulb-outline" size={25} color="black" />
                    <Text style={styles.TipTitle}>Daily Tip</Text>
                </View>
                <Text style={styles.GenTip}>
                    {generatedTip}
                </Text>
            </View>
        </View>
    )
}

export default DailyTip;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    TipBox: {
        width: 300,
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 10,
        backgroundColor: '#eee',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    TipTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 8, // Space between icon and text
    },
    GenTip: {
        fontSize: 16,
        marginLeft: 33, // Aligns with text (icon width + margin)
    }
})