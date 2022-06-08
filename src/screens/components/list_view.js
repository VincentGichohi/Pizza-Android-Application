
import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, Text, Image, Button } from 'react-native';

class ListView extends Component {
render() {
    const mytext = "by ProgrammingWithUs";
    return (
        <SafeAreaView style={styles.center}>
        <Image
        style={styles.PizzaImage}
        source={{
            uri: "https://cdn.pixabay.com/photo/2017/12/05/20/10/pizza-3000285_960_720.png",
        }}
        />
        <Text style={styles.baseText}>Pizza vs. Pizza App</Text>
        <Text style={styles.newText}>{mytext}</Text>
        <Text style={styles.title}>List View</Text>
        <Button title="List Item, Click for Details"
        onPress={( ) => this.props.navigation.navigate("Detail")}
        />
        </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 36,
        marginBottom: 16,
    },
    baseText: {
        color: "navy",
        fontSize: 30,
        fontStyle: "italic",
    },
    pizzaImage: {
        width: 200,
        height: 200,
    },
});
export default ListView;