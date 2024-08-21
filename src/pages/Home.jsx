import { useState } from "react"
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from "react-native";

export default function Home(
    navigation
){
    const [username, setUsername] = useState('');
    
    async function  handleSearch() {
        if  (username.trim() === ''){
            Alert.alert('Erro','Por favor digite o nome de usuáro.');
            return;
        }
        try {
            const response = await fetch(`
                https://api.github.com/users/${username}/repos
                `) 
                const data = await response.json();
                navigation.navigate('Details',{
                    username: name,
                    repos: data    
                }) 
        } catch (error){
            Alert.alert('Erro','Usuário não encontrado.');  
            return;
        }
    }
    
    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                GitHube Explorer
            </Text>

            <Text style={styles.subtitle}>
                Digite o nome do usuário
            </Text> 

            <TextInput style={styles.input}
                placehoder='Digite o nome do usuário'
                placeholderTextColor='#ccc'
            />

            <TouchableOpacity style={styles.button} onPress={handleSearch}>
                <Text style={styles.buttonText}>
                    Buscar
                </Text>
            </TouchableOpacity>
        </View>
    )
}   

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#282C34',
        justifyContent: 'center',
        alignItems: 'center', 
        padding: 20 
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    },
    subtitle:{
        color: '#aaa',
        fontSize: 16,
        marginTop: 20,
        marginBotton: 20
    },
    input: {    
        width: '100%',
        borderColor: '#555',
        height: 50,
        borderWidth: 1,
        color: 'white',
        padding: 10,
        borderRadius: 8           
    },
    button:{
        backgroundColor: '#7159c1',
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
        padding: 15,
        borderRadius: 8
    },
    buttonText:{
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
})
