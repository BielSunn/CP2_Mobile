import React from 'react';
import { Button, Image, ImageBackground, Linking, Pressable, StyleSheet, Text, TextInput, View } from 'react-native-web';



export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/fiap_bg.png')} style={styles.imageBackground}>
                <Image
                    style={styles.imageFiapLogo}
                    source={require('../../assets/fiap_logo.png')}
                />
                <Text style={styles.textEntrar}>Entrar</Text>
                <TextInput
                    placeholder='Username'
                    style={styles.textInput}

                />
                <TextInput
                    placeholder='Senha'
                    style={styles.textInput}
                />
                <Button
                    title='ENTRAR: BUTTON'
                    //onPress={() => navigation.replace}
                    style={styles.button}
                />
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>ENTRAR: PRESSABLE</Text>
                </Pressable>
                <Text onPress={() => navigation.replace('Cadastro')} style={styles.textCadastrar}>
                    Cadastrar
                </Text>

            </ImageBackground>
        </View>

    )
}

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
        height: '100%',
        width: '100%',
        padding: 16,
    },
    imageFiapLogo: {
        width: '70%',
        height: '10%',
        margin: 16,
        resizeMode: 'contain',
    },
    textEntrar: {
        fontSize: 26,
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
    textCadastrar: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
    }
})


/*
<Button 
title='ENTRAR'
//onPress={() => navigation.replace}
style={styles.button}
/>
*/