import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, Button, Image } from 'react-native';
import styles from '../styles/styles';

export default function HomeScreen({ navigation }) { // Receive navigation prop
  return (
    <View style={styles.container}>

      <TouchableOpacity 
        style={styles.nav_button} 
        onPress={() => navigation.navigate('Screen_Clock')} 
      >
        <Image 
          source={require('../assets/icon_clock.png')} 
          style={styles.nav_button_icon}
          />
      </TouchableOpacity>

      
      <TouchableOpacity 
        style={styles.nav_button} 
        onPress={() => navigation.navigate('Screen_Speedometer')} 
      >
        <Image 
          source={require('../assets/icon_speedometer.png')} 
          style={styles.nav_button_icon}
          />
      </TouchableOpacity>


      <TouchableOpacity 
        style={styles.nav_button} 
        onPress={() => navigation.navigate('Screen_Music')} 
      >
        <Image 
          source={require('../assets/icon_music.png')} 
          style={styles.nav_button_icon}
          />
      </TouchableOpacity>


      <StatusBar hidden={true} />

    </View>
  );
}
