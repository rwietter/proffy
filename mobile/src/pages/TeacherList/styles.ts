import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#f0f0f7',
    flex: 1,
  },
  teacherItemScroll: {
    marginTop: -40,
  },
  searchFormContainer: {
    marginBottom: 24,
  },
  searchFormInput: {},
  searchFormInternContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchFormBlock: {
    width: '48%',
  },
  searchFormBlockLabel: {
    color: '#d4c2ff',
    fontFamily: 'Archivo_700Bold',
  },
  searchFormBlockInput: {
    height: 54,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 5,
    marginBottom: 16,
  },
  searchButtonSubmit: {
    backgroundColor: '#04d361',
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  searchButtonSubmitText: {
    color: '#fff',
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
  },
});

export default styles;
