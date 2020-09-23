import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Dimensions, ActivityIndicator } from 'react-native';
import styles from './styles';
import moment from 'moment';
import Carousel from 'react-native-snap-carousel';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from 'axios';
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
import {getCities, getData} from './reqs';

const AppMain = () => {
  const [data, setData] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselRef = useRef();
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/')
        .then(response => { if (response.status === 200) { setStates(response.data); setLoading(false) } })
        .catch(error => console.log(error))
    })()
  }, [])

  const renderTopCard = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        {data ? (
          <>
            {!loading ? (
              <>
                <Text style={styles.cardText}>{item.title}</Text>
                <View style={styles.infoContainer}>
                  {item.id === 1 && <MaterialCommunityIcons name="christianity-outline" size={40} color="white" />}
                  {item.id === 2 && <MaterialCommunityIcons name="bacteria-outline" size={40} color="white" />}
                  {item.id === 3 && <MaterialCommunityIcons name="target" size={40} color="white" />}
                  <Text style={styles.textInfo}>{item.count}</Text>
                </View>
              </>
            ) : (<View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}><ActivityIndicator size="large" color="#fff" /></View>)}
          </>
        ) : (
            <View style={{ marginHorizontal: 30, justifyContent: 'center', alignItems: 'center', flex: 1 }}>
              <MaterialCommunityIcons name="bell-outline" size={40} color="white" />
              <Text style={[styles.cardText, { textAlign: 'center' }]}>Escolha um estado e uma cidade</Text>
            </View>)
        }
      </View>
    );
  }

  if (states) {
    var addStates = new Object()
    addStates = states.map(item => new Object({ value: item.id, label: item.sigla }))
  }

  if (cities) {
    var addCities = new Object()
    addCities = cities.map(item => new Object({ value: item.nome, label: item.nome }))
  }

  const myDate = moment(new Date(data?.date).toString()).format("DD/MM/YYYY - HH:mm");
  return (
    <View style={styles.container} >
      <View style={styles.topContainer}>
        <Carousel
          ref={carouselRef}
          data={data ? [
            { id: 1, title: 'Mortes', count: data?.deaths },
            { id: 2, title: 'Casos', count: data?.confirmed },
            { id: 3, title: 'Letalidade', count: data?.death_rate * 100 + '%' },
          ] : [{}, {}, {}]}
          renderItem={renderTopCard}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={250}
          onSnapToItem={(index) => setCarouselIndex(index)}
          itemHeight={150}
        />
        <View style={styles.ballsContainer}>
          <View style={carouselIndex === 0 ? styles.carouselBall : [styles.carouselBall, { opacity: 0.3 }]} />
          <View style={carouselIndex === 1 ? styles.carouselBall : [styles.carouselBall, { opacity: 0.3 }]} />
          <View style={carouselIndex === 2 ? styles.carouselBall : [styles.carouselBall, { opacity: 0.3 }]} />
        </View>

        <View style={styles.selectContainer}>
          <RNPickerSelect
            onValueChange={(value) => getCities(value, setLoading, setCities)}
            placeholder={{ label: 'Estado' }}
            items={addStates || {}}
            style={{
              inputIOS: {
                fontSize: 16,
                paddingHorizontal: 10,

                backgroundColor: 'white',
                borderRadius: 4,
                color: 'black',
                height: 50,
                width: 50,
                fontFamily: 'avenir',
              },
              placeholder: {
                color: 'grey',
              }
            }}
          />
          <RNPickerSelect
            onValueChange={(value) => getData(value, setLoading, setData)}
            placeholder={{ label: 'Cidade' }}
            items={addCities || {}}
            style={{
              inputIOS: {
                fontSize: 16,
                paddingHorizontal: 10,
                backgroundColor: 'white',
                marginLeft: 8,
                borderRadius: 4,
                color: 'black',
                fontFamily: 'avenir',
                width: 150,
                height: 50,
              },
              placeholder: {
                color: 'grey',
              }
            }}
          />
        </View>

        <Text style={styles.textDate}>ÚLTIMA ATUALIZAÇÃO: {myDate}</Text>
      </View>


    </View>
  )
}

export default AppMain;