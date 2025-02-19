import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Button, View, Text, Alert} from 'react-native';
import styles from '../styles/styles';

export default function App() {
  
  let currentTime = new Date();
  
  return (
    <View style={styles.container}>
      <Text>{currentTime.getHours()}:{currentTime.getMinutes()}</Text>

      <Button title="Learn More"/>
    </View>
  );
}