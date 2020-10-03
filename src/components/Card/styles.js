import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  titleContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title:{
    fontWeight: 'bold',
  },
  cardItem:{
    flexDirection: 'row',
    width: '80%',
    marginTop: 10,
  },
  info:{
    marginLeft: 5,
  }
});

export default styles;