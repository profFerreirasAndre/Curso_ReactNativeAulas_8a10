import { StyleSheet, FlatList, View, Text, Image, TextInput, Button  } from "react-native";
import React, { useState } from 'react'; 



const lista =[
    {id: "1", nome: "sapato", preco: "150,00", image: "https://static.netshoes.com.br/produtos/sapato-social-masculino-cadarco-bico-quadrado-conforto/06/HAP-0069-006/HAP-0069-006_zoom1.jpg?ts=1728978198&ims=544x"},
    {id: "2", nome: "luvas", preco: "50,00", image:"https://http2.mlstatic.com/D_NQ_NP_2X_756440-MLB71540952245_092023-F-luva-musculaco-fitness-academia-treino-malhar-neoprene-gym.webp"},
    {id: "3", nome: "casaco", preco: "60,00", image:"https://http2.mlstatic.com/D_NQ_NP_2X_983411-MLB51194374355_082022-F-casaco-sobretudo-parka-jaqueta-masculino-parca-453.webp"},
    {id: "4", nome: "bermuda", preco: "40,00", image:" https://s.brascol.com.br/product/2025/processados/1348508_1.jpg"},
    {id: "5", nome: "camisa", preco: "50,00", image:"https://img.elo7.com.br/product/300x400/486629F/camiseta-clube-da-luta-exclusiva-plus-size-bandas.jpg"},
    {id: "6", nome: "touca", preco: "30,00", image:"https://images.tcdn.com.br/img/img_prod/1077394/touca_masculina_de_la_forrada_para_frio_cinza_533_1_1f2cfd0a280caffa46a957819035539c.jpg"},
];
export default function Aula8_1FlatList(){   
     const [listaProdutos, setListaProdutos] = useState(lista);
     const [nome, setNome] = useState('');
     const [preco, setPreco] = useState('');
     const [link, setLink] = useState('');
 
   
     const adicionarProduto = () => {
         if (nome.trim() === '' || preco.trim() === '' || link.trim() === '') {
             alert("Por favor, preencha todos os campos.");
             return;
         }
 
         const novoProduto = {
             id: String(listaProdutos.length + 1), 
             nome: nome,
             preco: preco,
             image: link,
         };
 
   
         setListaProdutos([...listaProdutos, novoProduto]);
         setNome('');
         setPreco('');
         setLink('');
     };


    return(

        <View style = {styles.container}>
            <View style={{marginBottom:20, alignItems: 'center'}}>
                <TextInput style={styles.input} placeholder="Produto"
                 value={nome} 
                 onChangeText={setNome} 
                />
                <TextInput style={styles.input} placeholder="Preço R$"
                    value={preco} // <-- Adicionado: Liga o valor do input ao estado 'preco'
                    onChangeText={setPreco} 
                    keyboardType="numeric" 
                />
                <TextInput style={styles.input} placeholder="Link"
                  value={link} 
                  onChangeText={setLink} 
                />  

                <Button 
                    onPress={adicionarProduto} 
                    title="ADICIONAR" 
                    color="#4682B4" 
                />
            </View>
            
            <FlatList
            data={listaProdutos}
            renderItem={({item}) => <Produto data={item}/>}
            keyExtractor={(item) => item.id}
            />
            
        </View>
    );
}

function Produto({data}){
    return(
    <View style ={styles.containerProduto}>
       

        <View style = {styles.subContainer}>
            {/* <Text style = {styles.textoProduto}> id: {data.id}</Text> */}
            <Text style = {styles.textoProduto}>Produto: {data.nome}</Text>
            <Text style = {styles.textoProduto}>Preço: R$ {data.preco}</Text>
           <Image style={styles.imagem}
            source={{uri: data.image}}
            />
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    containerProduto:{
        backgroundColor: '#white',
        height: 150,

    },
    textoProduto:{
        color: '#4682B4',
        fontSize: 26
    },
    subContainer:{
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10
    },
    imagem: {
        resizeMode: 'contain',
        width: 100,
        height: 50
    },

    input:{
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 8,
        textAlign:'center',
        width: '20%',
        height: 30,
        fontSize: 20,
        color: '#4682B4'

    },
});