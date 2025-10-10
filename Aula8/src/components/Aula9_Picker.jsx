import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';

export default function Aula9Picker() {
  const [value, setValue] = useState('')
  return (

    <View style={styles.container}>
     <Text>Menu Pizzas</Text>
     <Picker
     selectedValue={value}
     onValueChange={(itemValue, itemIndex) =>setValue(itemValue)}

     >
      <Picker.Item key={1} value={'mussarela'} label='mussarela'/>
      <Picker.Item key={2} value={'calabresa'} label='calabresa'/>
      <Picker.Item key={3} value={'frango com catupiri'} label='frango com catupiri'/>
      <Picker.Item key={4} value={'4 queijos'} label='4 queijos'/>
      <Picker.Item key={5} value={'chocolate'} label='chocolate'/>
      <Picker.Item key={6} value={'peperone'} label='peperone'/>
      <Picker.Item key={7} value={'portugesa'} label='ortugesa'/>
      <Picker.Item key={8} value={'romeu e julieta'} label='romeu e julieta'/>
     </Picker>

     <Text>Item selecionado: {value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});