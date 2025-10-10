import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Scroll1 from './src/components/Aula8Scroll';
import Flat from './src/components/Aula_FlatList';


export default function App() {
  return (
    <View style={styles.container}>
      <Flat/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});