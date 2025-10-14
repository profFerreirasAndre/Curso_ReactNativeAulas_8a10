import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Scroll1 from './src/components/Aula8Scroll';
import Flat from './src/components/Aula8_FlatList';
import Aula9Picker from './src/components/Aula9_Picker';
import Aula8_1FlatList from './src/components/Aula 8.1_flatList';


export default function App() {
  return (
    <View style={styles.container}>
     <Aula8_1FlatList/>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});