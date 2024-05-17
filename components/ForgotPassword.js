import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Image } from 'react-native';
import { styles } from './styles/Styles';


export default ForgotPasswordScreen = ({navigation}) => {
  const [email, setEmail] = useState('');

  return (
 
    <KeyboardAvoidingView style={styles.container}>

    <View style={styles.imgContainer}>      
      <Image style={styles.img} source={require('../assets/logo3.png')}/>
    </View>

    <View style={styles.formContainer}>
    <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btn_text}>Enviar link</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.btn_text}>Voltar</Text>
        </TouchableOpacity>

    </View>
    </KeyboardAvoidingView>
  );
};


