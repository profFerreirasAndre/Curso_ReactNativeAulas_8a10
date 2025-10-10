import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Scroll1 from './src/components/Aula8Scroll';
import Flat from './src/components/Aula8_FlatList';
import Aula9Picker from './src/components/Aula9_Picker';


export default function App() {
  return (
    <View style={styles.container}>
     <Aula9Picker/>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});