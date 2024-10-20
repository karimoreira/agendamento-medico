import { Alert, Text, TouchableOpacity } from 'react-native';
import { styles } from './button.style';

function Button(props){

    function TesteClique(){
        Alert.alert("Clicou no botão")
    }

     return <TouchableOpacity onPress={TesteClique} style={ styles.btn}>

     <Text style={styles.text}
     >
        {props.text}</Text>
     </TouchableOpacity>
}

export default Button;