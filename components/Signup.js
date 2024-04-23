import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, KeyboardAvoidingView, Image, Text } from 'react-native';
import { styles } from './styles/Styles';

export default SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  return (
    <KeyboardAvoidingView style={styles.container}>
        <View style={styles.imgContainer}>      
         <Image style={styles.img} source={require('../assets/logo3.png')}/>
       </View>
      <View style={styles.formContainer}>

        <TextInput
          placeholder="Nome"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
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
        <TextInput
          placeholder="Repita a senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btn_text}>Cadastrar</Text>
         </TouchableOpacity>  
         <TouchableOpacity>
            <Text style={styles.btn_text}>Voltar</Text>
          </TouchableOpacity>    
         </View>

    </KeyboardAvoidingView>
  );
};

