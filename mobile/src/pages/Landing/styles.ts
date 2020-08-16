import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#8257e5',
    justifyContent: 'center',
    padding: 40,
  },
  landingImage: {
    width: '100%',
    resizeMode: 'contain',
  },
  title: {
    fontFamily: 'Poppins_400Regular',
    color: '#fff',
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80,
  },
  titleBold: {
    fontFamily: 'Poppins_600SemiBold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',
  },
  button: {
    height: 120,
    width: '45%',
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 24,
    justifyContent: 'space-between',
  },
  buttonPrimary: {
    backgroundColor: '#9875f5',
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Archivo_700Bold',
    fontSize: 20,
  },
  buttonSecondary: {
    backgroundColor: '#04d361',
  },
  connections: {
    marginTop: 50,
    alignSelf: 'center',
    color: '#fff',
    fontFamily: 'Poppins_600SemiBold',
  },
});

export default styles;
