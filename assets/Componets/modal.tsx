import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modal';
import MainModalDois from "../../assets/Componets/modal2";
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import Cadastro from '../../src/Cadastro/cadastro';

interface ScreenNavigationProp{
    navigate: (screen: string) => void;
}

const MainModalUm: React.FC = () => {
    const [ModalUm, setModalUm] = useState(false);

const{navigate} = useNavigation <ScreenNavigationProp>();

    useEffect(() => {
        const firstModalTimeout = setTimeout(() => {
            setModalUm(true);
        }, 8000);
        return () => {
            clearTimeout(firstModalTimeout);
        };
    }, []);

    const fecharModal = () => {
        setModalUm(false);
    };

    const cadastrar = () => {
        setModalUm(false);
        navigate('Cadastro');
      };

    return (
        <Modal isVisible={ModalUm}
            style={styles.modal}
            backdropOpacity={0.5}>
            <View style={styles.modalContent}>

                <Text style={styles.modalText}>O aplicativo n° 1 para corredores e ciclistas</Text>

                <TouchableOpacity style={styles.facebook}
                    onPress={fecharModal}>
                    <Image source={require("../../assets/Pictures/iconFacebook.png")}
                        style={{ backgroundColor: "#3B5998", width: "7%", height: "100%" }} />
                    <Text style={styles.buttonText}>Continuar com o Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.google}
                    onPress={fecharModal}>
                    <Image source={require("../../assets/Pictures/iconGoogle.png")}
                        style={{ backgroundColor: "#fff", width: "10%", height: "100%" }} />
                    <Text style={styles.buttonText2}>Continuar com o Google</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.email}
                    onPress={cadastrar}>
                    <Image source={require("../../assets/Pictures/iconEmail.png")}
                        style={{ backgroundColor: "#fff", width: "7%", height: "100%" }} />
                    <Text style={styles.buttonText2}>Inscreva-se com o e-mail</Text>
                </TouchableOpacity>

                <Text style={styles.modalText2}>JÁ SOU MEMBRO</Text>
                <MainModalDois />
            </View>
        </Modal>

    );
};

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        margin: 0,
    },
    modalContent: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        paddingHorizontal: 20,
    },
    modalText: {
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 20,
    },
    modalText2: {
        fontSize: 16,
        fontWeight: 'bold',
        margin: 10,
        width: '50%',
    },
    facebook: {
        backgroundColor: '#3B5998',
        justifyContent: 'space-around',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        paddingVertical: 12,
        borderRadius: 8,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,

    },
    google: {
        backgroundColor: '#FFF',
        justifyContent: 'space-around',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        paddingVertical: 12,
        borderRadius: 8,
        marginTop: 20,
        borderWidth: 1,
        borderColor: 'black',
    },
    email: {
        backgroundColor: '#FFF',
        justifyContent: 'space-around',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        paddingVertical: 12,
        borderRadius: 8,
        marginTop: 20,
        borderWidth: 1,
        borderColor: 'black',
    },
    buttonText2: {
        color: 'black',
        fontSize: 16,
    },
});
export default MainModalUm;