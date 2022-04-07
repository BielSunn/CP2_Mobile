import React from 'react';
import {
    Image,
    ImageBackground,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native-web';



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
                    secureTextEntry={true}
                    placeholder='Senha'
                    style={styles.textInput}
                />

                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>ENTRAR</Text>
                </Pressable>
                <Text onPress={() => navigation.replace('Cadastro')} style={styles.textCadastrar}>Cadastrar</Text>

                <Text style={styles.textEsqueceuSenha}>Esqueceu a senha</Text>

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
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        paddingVertical: 32,
    },
    textInput: {
        width: '100%',
        height: 40,
        backgroundColor: '#d3d3d3',
        //borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 16,
        marginBottom: 8,
        fontSize: 18,
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
        font: 'Gotham HTF Bold',
    },
    textCadastrar: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        //marginRight: '90%',
        left: 0,
        paddingVertical: 32,
    },
    textEsqueceuSenha: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        //paddingVertical: 32
        //marginLeft: '90%'
    }
})
