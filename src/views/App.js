import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { useCurrentTime } from '../functions/functions';
import Clock from "react-live-clock";
import styles from '../styles/styles';

export default function App() {

  return (
    <View style={styles.container}>
      <Clock style={styles.text} element={Text} />
      
      <TouchableOpacity style={{ width:200, height: 20, marginTop: 10, backgroundColor:'#000000'}}>
          <Text style={{color:'#FFFFFF'}}>HOME BUTTON</Text>
      </TouchableOpacity>


      {/* HIDE STATUS BAR */}
      <StatusBar hidden={true} />
    </View>
  );
}
