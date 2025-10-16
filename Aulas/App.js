import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import Scroll1 from './src/components/Aula8Scroll';
import Flat from './src/components/Aula8_FlatList';
import Aula9Picker from './src/components/Aula9_Picker';
import Aula8_1FlatList from './src/components/Aula 8.1_flatList';
import Aula10Slider from './src/components/Aula9_Slider_swit';


export default function App() {
  const imagem ='https://wuba.github.io/react-native-echarts/zh-Hans/assets/images/react-native-echarts-social-card-4242fb1161c35872640c9f93de58d9d1.png';

  return (
    <View style={styles.container}>
      <ImageBackground source={imagem}>
        <Aula10Slider/>
    </ImageBackground>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent:'center',
    alignContent: 'center'
  },
});