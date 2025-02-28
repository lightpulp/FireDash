import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/styles';

export default function Screen_Speedometer({navigation}){

    return(
        <View style={styles.container}>

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