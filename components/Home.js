import {View, Text, Image, TouchableOpacity} from 'react-native'
import { styles } from './styles/Styles';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>      
       <Image style={styles.img} source={require('../assets/logo2.png')}/>
      </View>

      <View style={styles.formContainer}>

        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.btn}>
            <Text style={styles.btn_text}>Login</Text>
        </TouchableOpacity>

        <Text style={{color:"white", marginTop:30}}>Carregando...</Text>

      </View>
    </View>
  )
}

export default Home
