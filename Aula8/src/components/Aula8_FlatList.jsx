import { StyleSheet, FlatList, View, Text  } from "react-native";


export default function Flat(){
    const lista =[
        {id: "1", nome: "André", email: "andre@gmail.com"},
        {id: "2", nome: "Gabriel", email: "gabriel@hotmail.com"},
        {id: "3", nome: "Natalia", email: "natalia@gmail.com"},
        {id: "4", nome: "Rebeca", email: "rebeca123@gmail.com"},
        {id: "5", nome: "André", email: "andre@gmail.com"},
        {id: "6", nome: "Gabriel", email: "gabriel@hotmail.com"},
        {id: "7", nome: "Natalia", email: "natalia@gmail.com"},
        {id: "8", nome: "Rebeca", email: "rebeca123@gmail.com"},
        {id: "9", nome: "André", email: "andre@gmail.com"},
        {id: "10", nome: "Gabriel", email: "gabriel@hotmail.com"},
        {id: "11", nome: "Natalia", email: "natalia@gmail.com"},
        {id: "12", nome: "Rebeca", email: "rebeca123@gmail.com"}
    ]

    return(

        <View style = {styles.container}>
            <FlatList
            data={lista}
            renderItem={({item}) => <Pessoa data={item}/>}
            />
            
        </View>
    );
}

function Pessoa({data}){
    return(
    <View style ={styles.containerPessoa}>
        <View style = {styles.subContainer}>
            <Text style = {styles.textoPessoa}> id: {data.id}</Text>
            <Text style = {styles.textoPessoa}>Nome: {data.nome}</Text>
            <Text style = {styles.textoPessoa}>Email: {data.email}</Text>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    containerPessoa:{
        backgroundColor: '#222',
        height: 150,

    },
    textoPessoa:{
        color: 'white',
        fontSize: 26
    },
    subContainer:{
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10
    }
});