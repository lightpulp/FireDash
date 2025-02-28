import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/styles';
import Clock from "react-live-clock";

export default function Screen_Clock({navigation}) {
  return (
    <View style={styles.container}> 

      <Clock style={styles.text} element={Text} />

      <TouchableOpacity 
        style={styles.nav_button} 
        onPress={() => navigation.navigate('Home')} 
      >
        <Image 
          source={require('../assets/icon_logo.png')} 
          style={styles.nav_button_icon_logo}
          />
      </TouchableOpacity>

    </View>
  );
}
