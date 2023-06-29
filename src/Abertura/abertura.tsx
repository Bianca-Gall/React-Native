import React, { useEffect } from "react";
import { Image, View, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../Login/login';

const Abertura = () => {
    const navigation = useNavigation();

    useEffect(() => {

        const tempoDeEspera = 3000;

        const temporizador = setTimeout(() => {
            navigation.navigate('Login');
        }, tempoDeEspera);

        return () => clearTimeout(temporizador);
    }, []);

    return (
        <View style={styles.container}>

            <View style={styles.contStrava}>
                <Image source={require("../../assets/Pictures/logoStrava.png")} style={styles.strava} />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FB5200",
    },
    contStrava: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    strava: {
        backgroundColor: "#FB5200",
        position: "relative",
        justifyContent: "center",
        padding: 200,
        width: "10%",
        height: "10%",
    },

});

export default Abertura;