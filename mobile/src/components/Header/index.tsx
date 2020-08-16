import { useNavigation } from '@react-navigation/native';

import React, { ReactNode } from 'react';
import { View, Text, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import goBackIcon from '../../assets/images/icons/back.png';
import logoIcon from '../../assets/images/logo.png';
import styles from './styles';

interface IHeader {
  title: string;
  isVisibleSearchButton?: ReactNode;
}

const Header: React.FC<IHeader> = ({
  title,
  isVisibleSearchButton,
  children,
}) => {
  const { navigate } = useNavigation();

  const handleNavigate = () => {
    navigate('Landing');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleNavigate}>
          <Image source={goBackIcon} resizeMode="contain" />
        </BorderlessButton>
        <Image source={logoIcon} resizeMode="contain" />
      </View>
      <View style={styles.headerTitle}>
        <Text style={styles.title}>{title}</Text>
        {isVisibleSearchButton}
      </View>
      {children}
    </View>
  );
};

export default Header;
