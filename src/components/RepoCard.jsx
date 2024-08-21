import { StyleSheet, TouchableOpacity, View, Text, Linking } from "react-native";
// import * as Linking from 'expo-linking';


export function RepoCard({ repo }){
    function handlePress(){
        Linking.openURL("repo.html_url")
    }
    return(        
        <TouchableOpacity style = {styles.container}
        onPress={handlePress}
        >
            <Text style = {styles.name}>
                repo.name  
            </Text>
            <Text style={styles.description}>
               {repo.description   }
            </Text>
        </TouchableOpacity>  
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#444',
        padding:15,
        borderRadius:8,
        marginBottom:10
    },
    name: {
        color:'#fff',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom:10
    },
    description: {
        color: '#ccc',
        fontSize: 14,        
    }
})