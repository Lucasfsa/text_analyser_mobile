import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { styles } from './styles/Styles';

import Home from './Home';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import Signup from './Signup';
import Dashboard from './Dashboard';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
      <Stack.Navigator  screenOptions={{
        headerTintColor: 'white',
        headerStyle: {backgroundColor: '#DB7093'}
      }}>

        <Stack.Screen name="Home" component={Home}  options={{
          title: '',
        }} />
        <Stack.Screen name="Login" component={Login}  options={{
          title: 'Entrar',
        }} />
        <Stack.Screen name="Forgot Password" component={ForgotPassword}  options={{
          title: 'Esqueci minha senha',
        }} />
        <Stack.Screen  name="Sign up" component={Signup}  options={{
          title: 'Cadastrar',
        }} />

        <Stack.Screen  name="Dashboard" component={Dashboard}  options={{
           title: 'Dashboard'
        }} />

      </Stack.Navigator>
  );
};

export default AppNavigator

