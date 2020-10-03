import { StyleSheet } from 'react-native'
import { colors } from './assets/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  topContainer: {
    paddingTop: 50,
    paddingBottom: 20,

    alignItems: 'center',
  },
  slide: {
    height: 150,
    backgroundColor: colors.secundary,
    borderRadius: 10,

    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  cardText:{
    marginTop:20,
    fontFamily: 'avenir-bold',
    color: colors.white,
    fontSize: 20,
  },
  infoContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  textInfo:{
    fontFamily: 'avenir-bold',
    color: colors.white,
    marginLeft: 10,
    fontSize: 25,
  },
  carouselBall:{
    width: 5,
    height: 5,
    backgroundColor: colors.white,
    borderRadius: 50,
  },
  ballsContainer:{
    flexDirection: 'row',
    width: 40,
    justifyContent: 'space-between',
    marginTop: 15,
  },
  textDate:{
    fontFamily: 'avenir-demi',
    color: (colors.white),
    opacity: 0.6,
    fontSize: 12,
    textAlign: 'center',
    marginTop: 15,
  },
  select:{
    color: 'white',
  },
  selectContainer:{
    marginTop: 20,
    marginVertical: 10,
    flexDirection: 'row',
  },
  cardsContainer:{
    alignItems: 'center'
  }
});

export default styles;