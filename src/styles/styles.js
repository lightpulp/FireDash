import { StyleSheet } from 'react-native';

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50,
    color: '#FFFFFF',
    fontFamily: 'sans-serif-medium',
    fontWeight: 'bold',
  },

  nav_button: {
    backgroundColor: '#222',
    margin: 10,
    padding: 10,
    borderRadius: 30,
    width: '100',
    height: '100',
  },

  nav_button_icon: {
    width: '100%',
    height: '100%',
    tintColor: '#FFFFFF',
  },

  nav_button_icon_logo: {
    width: '100%',
    height: '100%',
  },
});

export default homeStyles;
