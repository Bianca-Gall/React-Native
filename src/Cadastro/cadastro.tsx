import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import Modal2 from 'react-native-modal';

const Cadastro: React.FC = () => {
    const [Cadastro, setCadastro] = useState(false);


    const abrirCadastro = () => {
        setCadastro(true);
    };
    const fecharCadastro = () => {

        setCadastro(false);
    };


    const [text, onChangeText] = React.useState('E-mail');
    const [number, onChangeNumber] = React.useState('');


    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.login}
                onPress={abrirCadastro}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <Modal2 isVisible={Cadastro} style={styles.modal}
                backdropOpacity={0.8}>

                <View style={styles.modalContent}>
                    <Text style={styles.modalText}></Text>
                    <TouchableOpacity onPress={fecharCadastro}
                        style={styles.voltar}>
                        <Text style={styles.buttonVoltar}>Fazer Login</Text>
                    </TouchableOpacity>
                </View>

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
        // paddingHorizontal: 20,
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
        width: 200,
        height: 50,

        alignSelf: 'flex-start',
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
});

export default Cadastro;