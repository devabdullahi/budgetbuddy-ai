import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DailyTip = () => {
    const tip = "The 50/30/20 budgeting rule: 50% for needs, 30% for wants, and 20% for savings.";
    return(
        <View style={styles.centeredContent}>
            <Text style={styles.title}>Daily Tip</Text>
            <View style={styles.tipBox}>
                <View style={styles.titleContainer}>
                    <Icon name="bulb-outline" size={24} color="#333" />
                    <Text style={styles.tipTitle}>Smart Money Tip</Text>
                </View>
                <Text style={styles.tipText}>{tip}</Text>
            </View>
        </View>
    )
}

export default DailyTip;

const styles = StyleSheet.create({
    centeredContent: {
        width: '100%',
        maxWidth: 400,
        alignSelf: 'center',
        marginTop: 100,
        marginBottom: 19,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: '#222',
        marginBottom: 12,
        marginLeft: 4,
    },
    tipBox: {
        padding: 13,
        backgroundColor: '#f4f4f6',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    tipTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#333',
        marginLeft: 8,
    },
    tipText: {
        fontSize: 16,
        color: '#666',
        lineHeight: 22,
    }
})