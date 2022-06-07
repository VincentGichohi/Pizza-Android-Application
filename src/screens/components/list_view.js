
import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class ListView extends Component {
render() {
    return (
        <View style={styles.center}>
            <Text style={styles.title}>ListView</Text>
            <Button title="List Item, Click for Details"/>
        </View>
    );
}
}
const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center"
    },
    title: {
        fontSize: 36,
        marginBottom: 16,
    }
})
export default ListView;