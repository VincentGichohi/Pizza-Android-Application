import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
    const mytext = "by ProgramWithUs"
    return ( <View style = { styles.container } >
        <StatusBar style = "auto" />
        <Image
        style={styles.pizzaImage}
        source={{
        uri: "https://cdn.pixabay.com/photo/2017/12/05/20/10/pizza-3000285_960_720.png",
        }}
        />
        <Text style = { styles.baseText } > Pizza vs.Pizza App </Text>
        <Text style = {styles.newText}>{mytext}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    baseText: {
        color: "navy",
        fontSize: 30,
        fontStyle: "italic",
    },
    newText: {
        color: "red",
    },
    pizzaImage: {
        width: 200,
        height: 200,
    },
});