import { useState } from 'react';
import { StyleSheet, Text, View, Switch} from 'react-native';
import { Slider } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';


export default function Aula10Slider() {
    const [valor, setValor] = useState(0);
    const [valor2, setValor2]= useState(false);
    const[valor3,setValor3]= useState(0);
    const imagem ='https://blog.effectussoftware.com/wp-content/uploads/2020/03/React-Native-pic-768x452.jpg';
  return (
    <View style={styles.container}>
        <Text style={styles.texto}>Slider</Text>
        <Slider
        value={valor}
        onValueChange={setValor}
        step={1}
        minimumValue={0}
        maximumValue={100}
        thumbStyle={{height:30, width:30, backgroundColor:'blue'}}
        trackStyle={{height:20, width:200, borderRadius:10}}
        minimumTrackTintColor='blue'
        maximumTrackTintColor='lightgray'
        />

        <Text style={styles.texto}>O valor do Slide é: {valor.toFixed(0)}</Text>
        
        <Switch
        value={valor2}
        onValueChange={(velorSwitch)=> setValor2(velorSwitch)}
        />

        <Text style={styles.texto}>Exemplos de ícone</Text>
        
        <TouchableOpacity
     
        >
            <Ionicons name= 'laptop' size={40} />
        </TouchableOpacity>

        <Text> Variável valor3: {valor3}</Text>


        <Ionicons name= 'book' size={40} color={'gray'} />

     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center'

  },

  texto: {
    fontSize: 30,
    marginBottom: 40,
    color: 'white'
  },

  texto2: {
    fontSize: 30,
    margin: 20,
    color: 'white'
  },
});