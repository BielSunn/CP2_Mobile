import React, { useState } from 'react';

import {
    Alert,
    Image,
    ImageBackground,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';

import RadioForm, {
    RadioButton,
    RadioButtonInput,
    RadioButtonLabel,
} from 'react-native-simple-radio-button';


import Checkbox from 'expo-checkbox';

//import { RadioButton } from 'react-native-paper';

/*
var sexo = [
    { label: 'Masculino', value: 'Masculino' },
    { label: 'Feminino', value: 'Feminino' },
]
*/


export default function CadastroScreen({ navigation }) {

    const [userName, setUserName] = useState("");
    const [name, setName] = useState("");
    const [senha, setSenha] = useState("");
    const [genero, setGenero] = useState("Masculino");

    function cadastro() {
        alert("Username: " + userName + "\n" +
            "Name: " + name + "\n" +
            "Senha: " + senha + "\n" +
            "Gênero: " + genero)
    }

    function cadastroAlertTeste() {
        Alert.alert("Sucesso",
            "\nUsername: " + userName +
            "\nName: " + name +
            "\nSenha: " + senha +
            "\nGênero: " + genero)
    }


    const [isChecked1, setChecked1] = useState(false);
    const [isChecked2, setChecked2] = useState(false);

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/fiap_bg.png')} style={styles.imageBackground}>
                <Image
                    style={styles.imageFiapLogo}
                    source={require('../../assets/fiap_logo.png')}
                />
                <Text style={styles.textCadastrar}>Cadastrar</Text>
                <TextInput
                    placeholder='Username'
                    value={userName}
                    onChangeText={(value) => setUserName(value)}
                    style={styles.textInput}
                />
                <TextInput
                    placeholder='Nome Completo'
                    style={styles.textInput}
                    value={name}
                    onChangeText={text => setName(text)}
                />
                <TextInput
                    secureTextEntry={true}
                    placeholder='Senha'
                    style={styles.textInput}
                    onChangeText={text => setSenha(text)}
                />
                <TextInput
                    secureTextEntry={true}
                    placeholder='Confirmar Senha'
                    style={styles.textInput}

                    onChangeText={text => setSenha(text)}
                />

                <Text style={styles.sexo}>Sexo</Text>

                <RadioForm
                    radio_props={[
                        { label: 'Masculino', value: 'Masculino' },
                        { label: 'Feminino', value: 'Feminino' },
                    ]}
                    intial={0}
                    onPress={(value) => { setGenero(value) }}

                    buttonSize={5}
                    buttonOuterSize={25}
                    selectedButtonColor={'#ee125a'}
                    selectedLabelColor={'white'}
                    labelColor={'white'}
                    buttonColor={'white'}
                    labelStyle={{ fontSize: 20, }}
                    style={styles.radioButton}
                />

                <Checkbox
                    style={styles.checkbox}
                    value={isChecked1}
                    onValueChange={setChecked1}
                    color={isChecked1 ? '#ee125a' : undefined}
                />

                <Text style={styles.paragraph}>Li e concordo com o termo de uso</Text>

                <Checkbox
                    style={styles.checkbox}
                    value={isChecked2}
                    onValueChange={setChecked2}
                    color={isChecked2 ? '#ee125a' : undefined}
                />
                <Text style={styles.paragraph}>Aceito Receber emails</Text>


                <Pressable style={styles.button} onPress={() => cadastro()}>
                    <Text style={styles.buttonText}>CADASTRAR</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => navigation.replace('Login')}>
                    <Text style={styles.buttonText}>VOLTAR</Text>
                </Pressable>

            </ImageBackground>

        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        //padding: 16,
        height: '100%',
        width: '100%',
    },
    imageFiapLogo: {
        width: '60%',
        height: '10%',
        margin: 16,
        resizeMode: 'contain',
    },
    textCadastrar: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
    },
    textInput: {
        width: '100%',
        height: 40,
        backgroundColor: '#C0C0C0',
        //borderRadius: 20,
        fontSize: 18,
        paddingHorizontal: 16,
        marginBottom: 8,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        //borderRadius: 20,
        elevation: 3,
        backgroundColor: '#ee125a',
        marginTop: 25,
        width: '100%',
    },
    buttonText: {
        color: 'white',
    },
    sexo: {
        fontSize: 20,
        color: 'white',
        //marginRight: '90%'
        marginRight: 0,
        marginLeft: 0,
    },
    radioButton: {
        display: 'flex',
        width: 200,
        //marginRight: '50%',
        marginRight: 0,
        marginLeft: 0,
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    paragraph: {
        fontSize: 15,
        color: 'white',
    },
    checkbox: {
        margin: 8,
    },

})



