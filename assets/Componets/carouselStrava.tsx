import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const CarouselStrava: React.FC = () => {
    const [stravaImagem, setStravaImagem] = useState(0);
    const imagens = [
        {
            imagem: require('../../assets/Pictures/corrida3.jpg'),
          },
          {
            imagem: require('../../assets/Pictures/bike1.jpg'),
          },
          {
            imagem: require('../../assets/Pictures/corrida2.jpg'),
          },
          {
            imagem: require('../../assets/Pictures/nado1.jpg'),
          },
        ];

    useEffect(() => {
        const interval = setInterval(() => {
            setStravaImagem((prevImage) => (prevImage + 1) % imagens.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <View style={styles.container}>
            <Image source={imagens[stravaImagem].imagem} style={styles.imagem} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
      },
      imagem: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
      },
});

export default CarouselStrava;