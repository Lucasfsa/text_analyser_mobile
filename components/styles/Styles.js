import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DB7093',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgContainer: {
    alignItems: 'center',
  },
  formContainer: {
    width: '80%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    marginBottom: 10,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  img:{
    width: 200,
    resizeMode: 'contain'
  },
  btn:{
    width: '100%',
    backgroundColor: '#bf005f',
    marginBottom: 10,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    
   },
   btn_text:{
    color: 'white'
   },
   buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%', 
  },
});
