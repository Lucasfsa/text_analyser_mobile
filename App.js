import {View, StyleSheet, Button} from 'react-native';
import FirstPage from './components/FirstPage'

export default function App(){
  return (
    <View style={styles.container}>
    <FirstPage></FirstPage>
    <Button color='black' style={styles.buttonStyle} title='Entrar'></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle:{
    borderRadius:6,
    fontWeight:'bold'
  }

});