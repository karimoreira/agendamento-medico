import { Image, Text, TextInput, View } from "react-native";
import logo from "../../assets/logo.png";
import { styles } from "./login.style";
import Button from "../../components/button/button.jsx"
function Login() {
    return (
        <View style={styles.container}>

            <View style={styles.containerLogo}>
            <Image source={logo} style={styles.logo} />
            </View>
           
            <View>
               <View style={styles.containerInput}> 
                <TextInput placeholder="E-mail" style={styles.input}/> 
               </View> 
               <View style={styles.containerInput}> 
               <TextInput placeholder="Senha"  style={styles.input}/>
               </View> 
          
                <Button text="Acessar" />
            </View>

            <View style= {styles.footer}>
                <Text>Não tenho conta. Criar conta agora.</Text>
            </View>

        </View>
    );
}

export default Login;
