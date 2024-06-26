import React, { useState } from 'react';
import { View, TextInput, Image, KeyboardAvoidingView, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles/Styles';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
         <TextInput
           placeholder="Senha"
           value={password}
           onChangeText={setPassword}
           secureTextEntry
           style={styles.input}
         />
         <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} style={styles.btn}>
          <Text style={styles.btn_text}>Entrar</Text>
         </TouchableOpacity>

         <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Sign up')}>
            <Text style={styles.btn_text}>Cadastre-se</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Forgot Password')}>
            <Text style={styles.btn_text}>Esqueci a senha</Text>
          </TouchableOpacity>
        </View>

       </View>
    </KeyboardAvoidingView>
  
  );
};

