import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#8257e5',
    justifyContent: 'center',
    padding: 40,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Archivo_700Bold',
    color: '#fff',
    fontSize: 32,
    lineHeight: 42,
    maxWidth: 180,
  },
  description: {
    marginTop: 24,
    color: '#d4c2ff',
    fontSize: 18,
    lineHeight: 26,
    fontFamily: 'Poppins_400Regular',
    maxWidth: 240,
  },
  toGiveClasses: {
    marginVertical: 40,
    backgroundColor: '#04d361',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  toGiveClassesText: {
    color: '#fff',
    fontFamily: 'Poppins_400Regular',
    fontSize: 26,
  },
});

export default styles;
