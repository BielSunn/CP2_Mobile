import React, { useState } from 'react';
import { CheckBox, Image, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native-web';




export default function CadastroScreen() {

    const [isSelected, setSelection] = useState(false);


    return (
        <View>
            <ImageBackground source={require('../../assets/fiap_bg.png')} style={styles.imageBackground}>
                <Image
                    style={styles.imageFiapLogo}
                    source={require('../../assets/fiap_logo.png')}
                />
                <Text style={styles.textCadastrar}>Cadastrar</Text>
                <TextInput
                    placeholder='Username'
                    style={styles.textInput}
                />
                <TextInput
                    placeholder='Nome Completo'
                    style={styles.textInput}
                />
                <TextInput
                    secureTextEntry={true}
                    placeholder='Senha'
                    style={styles.textInput}
                />
                <TextInput
                    secureTextEntry={true}
                    placeholder='Confirmar Senha'
                    style={styles.textInput}
                />
                <CheckBox
                    title="Li e concordo com o termo de uso"
                />
                <CheckBox
                    title="Aceito receber emails"
                    checkedIcon="check"
                    uncheckedIcon="square-o"
                    checkedColor="green"
                    uncheckedColor="red"
                    checked={isSelected}
                    onPress={() => setSelected(!isSelected)}
                    value={isSelected}
                    //onValueChange={setSelection}
                    style={styles.checkbox}
                />
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>CADASTRAR</Text>
                </Pressable>
                <Pressable style={styles.button}>
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
        resizeMode: 'conver',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        height: '100%',
    },
    imageFiapLogo: {
        width: '70%',
        height: '10%',
        margin: 16,
        resizeMode: 'contain',
    },
    textCadastrar: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
    },
    textInput: {
        width: '100%',
        height: 40,
        backgroundColor: '#d3d3d3',
        //borderRadius: 20,
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
        marginTop: 8,
        width: '100%',
    },
    buttonText: {
        color: 'white',
    },
    checkbox: {
        width: '40%',
        alignSelf: "center",
    },

})