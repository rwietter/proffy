import React, { useState } from 'react';
import { View, Text, Image, Linking, AsyncStorage } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartIcon from '../../assets/images/icons/heart-outline.png';
import unfavorite from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import API from '../../services/API';
import styles from './styles';

export interface ITeacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface ITeacherProps {
  teacher: ITeacher;
  favorited: boolean;
}

// eslint-disable-next-line complexity
const TeacherItem: React.FC<ITeacherProps> = ({
  teacher,
  favorited,
}: ITeacherProps) => {
  const [isFavorited, setIsFavorited] = useState(favorited);

  const createNewTeacherConnection = () => {
    API.post('connections', {
      user_id: teacher.id,
    });
  };

  const handleMessage = () => {
    createNewTeacherConnection();
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
  };

  // eslint-disable-next-line complexity
  const handleToggleFavoriteTeachers = async () => {
    const favorites = await AsyncStorage.getItem('favoriteTeachers');
    let newFavoritesTeachers = [];
    if (favorites) newFavoritesTeachers = JSON.parse(favorites);
    if (isFavorited) {
      const findTeacher = newFavoritesTeachers.findIndex(
        (teacherItem: ITeacher) => {
          return teacherItem.id === teacher.id;
        }
      );
      newFavoritesTeachers.splice(findTeacher, 1);
      setIsFavorited(false);
    } else {
      newFavoritesTeachers.push(teacher);
      setIsFavorited(true);
    }
    await AsyncStorage.setItem(
      'favoriteTeachers',
      JSON.stringify(newFavoritesTeachers)
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.avatar} source={{ uri: `${teacher.avatar}` }} />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>
      <Text style={styles.bio}>{teacher.bio}</Text>
      <View style={styles.footer}>
        <Text style={styles.price}>Preço/Hora {'   '}</Text>
        <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
        <View style={styles.buttonContainer}>
          <RectButton
            onPress={handleToggleFavoriteTeachers}
            style={[styles.favorite, isFavorited ? styles.favorited : {}]}>
            {isFavorited ? (
              <Image source={heartIcon} />
            ) : (
              <Image source={unfavorite} />
            )}
          </RectButton>
          <RectButton onPress={handleMessage} style={styles.contact}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherItem;
