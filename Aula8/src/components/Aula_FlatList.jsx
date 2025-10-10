import { StyleSheet, FlatList, View, Text } from "react-native";

//Fazer o import o Text

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

        <View>
            <FlatList
            data={lista}
            renderItem={({item}) => <Pessoa data={item}/>}
            />
            
        </View>
    );
}

function Pessoa({data}){
    return(
    <View>
        <Text> id: {data.id}</Text>
        <Text>Nome: {data.nome}</Text>
        <Text>Email: {data.email}</Text>
    </View>
    )
}