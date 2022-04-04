import React, { useState } from 'react';
import { Image, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native-web';
import RadioForm, {
    RadioButton,
    RadioButtonInput,
    RadioButtonLabel,
} from 'react-native-simple-radio-button';



var sexo = [
    { label: 'Masculino', value: 0 },
    { label: 'Feminino', value: 1 },
]

export default function CadastroScreen({ navigation }) {

    const [isSelected, setSelection] = useState(false);
    const [male, setMale] = useState(false);
    const [female, setFemale] = useState(false);
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");



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
                    value={name}
                    onChangeText={(value) => setName(value)}
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

                <RadioForm
                    radio_props={sexo}
                    intial={0}
                    onPress={(value) => { console.log(value)}}

                    buttonSize={10}
                    buttonOuterSize={30}
                    selectedButtonColor={'#ee125a'}
                    selectedLabelColor={'white'}
                    labelColor={'white'}
                    buttonColor={'white'}
                    labelStyle= {{fontSize: 20,}}
                    style={styles.radioButton}
                />



                <Pressable style={styles.button}>
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
        padding: 16,
        height: '100%',
        width: '100%',
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
    radioButton: {
        display: 'block',
        width: 200,
        marginLeft: 0,
    },

})



/*
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
//style={styles.checkbox}
/>
<CheckBox
title="Male"
center
checked={male}
checkedIcon="dot-circle-o"
uncheckedIcon="circle-o"
onPress={genderMale}
/>
*/