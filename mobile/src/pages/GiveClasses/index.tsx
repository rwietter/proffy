import { useNavigation } from '@react-navigation/native';

import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import giveClassesImage from '../../assets/images/give-classes-background.png';
import styles from './styles';

const GiveClasses: React.FC = () => {
  const { goBack } = useNavigation();

  const handleBackNavigate = () => {
    goBack();
  };

  return (
    <View style={styles.wrapper}>
      <ImageBackground
        resizeMethod="resize"
        source={giveClassesImage}
        style={styles.content}>
        <Text style={styles.title}>Quer ser um Proffy ?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web.
        </Text>
      </ImageBackground>
      <RectButton onPress={handleBackNavigate} style={styles.toGiveClasses}>
        <Text style={styles.toGiveClassesText}>Tudo Bem</Text>
      </RectButton>
    </View>
  );
};

export default GiveClasses;
