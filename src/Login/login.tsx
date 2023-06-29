// import React, { useState } from "react";
import {Image, View, StyleSheet} from "react-native";
import MainModalUm from '../../assets/Componets/modal';
import CarouselStrava from "../../assets/Componets/carouselStrava";

const Login = () => {

    return (
        <View style={styles.container}>
            <View style={styles.carousel}>
                <CarouselStrava />
            </View>
            <View style={styles.contStrava}>
                <Image source={require("../../assets/Pictures/stravaBco.png")} style={styles.strava} />
            </View>
            <View >
                <MainModalUm />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "relative",
        flex: 1,
        backgroundColor: "#FB5200",
    },
    contStrava: {
     
        flex: 1,
        position: "absolute",
        blackgroundColor: "black",
        justifyContent: "flex-start",
        alignItems: "center",
        background:"#fff",
        width: "100%",
        height: "100%",
    },
    strava: {
        width: "50%",
        height: "30%",
        resizeMode: 'contain',
    },
    carousel: {
        height: "100%",
        backgroundColor: "#fff"
    }
});

export default Login;

