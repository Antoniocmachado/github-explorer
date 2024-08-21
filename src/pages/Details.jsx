import { setStatusBarBackgroundColor } from "expo-status-bar";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { RepoCard } from "../components/RepoCard";

export function Details (route,navigation){
    const {
        username,
        repos
    } = route.params;

    return(
        <View style= {styles.container}>

            <TouchableOpacity style = {styles.button}
                onPress={()=>navigation.goBack()}
            >
                <Text style = {styles.buttonText}>
                    Voltar
                </Text> 
            </TouchableOpacity>

            <Text style={styles.title}>
                GitHube de {username}
            </Text>
            <Text style={styles.subtitle}>
                Repositórios:
            </Text>
            <ScrollView>
                {repos.map((repo) => (
                     <RepoCard key={repo.id} repo={repo}/>
                ))}
               
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        backgroundColor: '#282C34',
        padding:20
    },
    button: {
        alignSelf: 'flex-start',
        padding: 10,
        borderRadius: 8,
        backgroundColor:'#7159C1',
        marginVertical: 20
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20

    },
    subtitle:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10


    }
})