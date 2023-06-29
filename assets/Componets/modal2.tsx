import React, { useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import Modal2 from 'react-native-modal';

const MainModalDois: React.FC = () => {
    const [ModalDois, setModalDois] = useState(false);


    const abrirModalDois = () => {
        setModalDois(true);
    };
    const fecharModal = () => {

        setModalDois(false);
    };


    const [text, onChangeText] = React.useState('E-mail');
    const [number, onChangeNumber] = React.useState('');


    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.login}
                onPress={abrirModalDois}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <Modal2 isVisible={ModalDois} style={styles.modal}
                backdropOpacity={0.8}>

                <View style={styles.modalContent}>
                    <Text style={styles.modalText}></Text>
                    <TouchableOpacity onPress={fecharModal}
                        style={styles.voltar}>
                        <Text style={styles.buttonVoltar}>Fazer Login</Text>
                    </TouchableOpacity>
                </View>

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
                    <Text style={styles.buttonText2}>Continuar com o Facebook</Text>
                </TouchableOpacity>

                <View>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="Senha"
                        keyboardType="numeric"
                    />
                </View>
                <Text style={styles.modalText2}>Esqueceu a senha</Text>
            </Modal2>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        width: '100%',
    },
    modal: {
        flex: 1,
        margin: 0,
    },
    modalContent: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
    },
    login: {
        backgroundColor: '#FB5200',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        borderRadius: 8,
    },
    voltar: {
        
        backgroundColor: '#FB5200',
        width: "100%",
        height: "10%",
        margin: 0,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    modalText: {
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 20,
    },
    facebook: {
        backgroundColor: '#3B5998',
        justifyContent: 'space-around',
        flexDirection: 'row',
        width: '80%',
        alignItems: 'flex-start',
        padding: 12,
        borderRadius: 8,
        marginTop: 20,
    },
    buttonVoltar: {
        color: 'white',
        fontSize: 20,

    },
    google: {
        backgroundColor: '#FFF',
        justifyContent: 'space-around',
        flexDirection: 'row',
        width: '80%',
        alignItems: 'center',
        padding: 12,
        borderRadius: 8,
        marginTop: 20,
        borderWidth: 1,
        borderColor: 'black',
    },
    buttonText2: {
        color: 'black',
        fontSize: 16,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    modalText2: {
        fontSize: 16,
        fontWeight: 'bold',
        margin: 10,
        width: '50%',
    },
});

export default MainModalDois;