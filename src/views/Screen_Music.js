import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

export default function Screen_Music({navigation}) {
  return (
    <View style={styles.container}> 

        <Text style={styles.buttonText}> MUSIC</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}> 
            <Text style={styles.buttonText}>HOME</Text>
        </TouchableOpacity>

    </View>
  );
}
