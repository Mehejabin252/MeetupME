import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItem: 'center',
    //backgroundColor: 'red',
  },
  bottomContainer: {
    flex: 0.8,
    //backgroundColor: 'blue',
  },
});

export default styles;
