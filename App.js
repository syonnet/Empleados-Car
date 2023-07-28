import 'react-native-gesture-handler';

import { StyleSheet } from 'react-native';
import StackNavigation from './Navegacion/StackNavigator';


export default function App() {
  return (
    <StackNavigation/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2ed42e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
