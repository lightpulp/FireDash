import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';
import Clock from "react-live-clock";

export default function Screen_Clock({navigation}) {
  return (
    <View style={styles.container}> 

      <Clock style={styles.text} element={Text} />

      <TouchableOpacity onPress={() => navigation.navigate('Home')}> 
        <Text style={styles.buttonText}>HOME</Text>
      </TouchableOpacity>

    </View>
  );
}
