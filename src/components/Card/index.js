import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import { colors } from '../../assets/styles';

const Card = ({ title, symptoms }) => {
  const [showInfo, setShowInfo] = useState();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShowInfo(!showInfo)} style={styles.titleContainer}>
        <Text style={styles.title} >{title}</Text>
        {showInfo ? <MaterialCommunityIcons name="arrow-up-drop-circle" size={24} color={colors.primary} /> : <MaterialCommunityIcons name="arrow-down-drop-circle" size={24} color={colors.primary} />}
      </TouchableOpacity>

      {showInfo && symptoms?.map((item) => {
        return (
          <View style={styles.cardItem}>
            <MaterialCommunityIcons name="backspace-reverse" size={15} color={colors.primary} />
            <Text style={styles.info}>{item}</Text>
          </View>
        )
      })}
    </View>
  );
}

export default Card;