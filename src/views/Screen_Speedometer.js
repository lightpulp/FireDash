import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

export default function Screen_Speedometer({navigation}){

    return(
        <View style={styles.container}>


            <Text style={styles.buttonText}>SPEEDOMETER</Text>
            
            <TouchableOpacity onPress={() => navigation.navigate('Home')}> 
                <Text style={styles.buttonText}>HOME</Text>
            </TouchableOpacity>
        

        
        
        </View>
    );
}