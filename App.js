import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './components/AppNavigator'

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
  );
}

export default App