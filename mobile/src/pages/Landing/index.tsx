import { useNavigation } from '@react-navigation/native';

import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import giveclassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import studyIcon from '../../assets/images/icons/study.png';
import landingImage from '../../assets/images/landing.png';
import API from '../../services/API';
import styles from './styles';

const Landing: React.FC = () => {
  const [connectionsValue, setConnectionsValue] = useState(0);
  const { navigate } = useNavigation();

  const handleNavigateToGiveClasses = () => {
    navigate('GiveClasses');
  };

  const handleNavigateToStudy = () => {
    navigate('AppTabs');
  };

  useEffect(() => {
    API.get('connections').then((response) => {
      const { data } = response;
      setConnectionsValue(data.total);
    });
  }, []);

  return (
    <View style={styles.wrapper}>
      <Image source={landingImage} style={styles.landingImage} />
      <Text style={styles.title}>
        Seja bem-vindo, {'\n'}
        <Text style={styles.titleBold}>O que deseja fazer ?</Text>
      </Text>
      <View style={styles.buttonsContainer}>
        <RectButton
          onPress={handleNavigateToStudy}
          style={[styles.button, styles.buttonPrimary]}>
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>
        <RectButton
          onPress={handleNavigateToGiveClasses}
          style={[styles.button, styles.buttonSecondary]}>
          <Image source={giveclassesIcon} />
          <Text style={styles.buttonText}>Dar aulas</Text>
        </RectButton>
      </View>
      <Text style={styles.connections}>
        Um total de {connectionsValue} conexões já realizadas.{' '}
        <Image style={styles.connectionsHeart} source={heartIcon} />
      </Text>
    </View>
  );
};

export default Landing;
