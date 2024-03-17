import {View, Text, StyleSheet, Image} from 'react-native'

export default function App(){
  return (
    <View>
      <Text style={styles.title}> text.Analyser</Text>
      <View style={styles.imgContainer}>      
       <Image style={styles.img} source={require('../assets/snack-icon.png')}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
    marginTop: 16,
    paddingVertical: 8,
    borderRadius: 6,
    color: 'black',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  img:{
    width:170,
    resizeMode: 'contain'
  },
  imgContainer:{
    alignItems:'center',
    justifyContent: 'center',
  }
})