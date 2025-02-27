import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

export default function HomeScreen({ navigation }) { // Receive navigation prop
  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => navigation.navigate('Screen_Music')}> 
        <Text style={styles.buttonText}>MUSIC</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Screen_Speedometer')}> 
        <Text style={styles.buttonText}>SPEEDOMETER</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Screen_Clock')}> 
        <Text style={styles.buttonText}>CLOCK</Text>
      </TouchableOpacity>

      <StatusBar hidden={true} />

    </View>
  );
}
