import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'

export default function App(){
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>      
       <Image style={styles.img} source={require('../assets/logo2.png')}/>
      </View>
      <Text style={{color:"white", marginTop:30}}>Carregando...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DB7093',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  img:{
    width: 280,
    resizeMode: 'contain'
  },

})