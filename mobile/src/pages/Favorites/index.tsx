import { useFocusEffect } from '@react-navigation/native';

import React, { useState, useCallback } from 'react';
import { View, ScrollView, AsyncStorage } from 'react-native';

import Header from '../../components/Header';
import TeacherItem, { ITeacher } from '../../components/TeacherItem';
import styles from './styles';

const Favorites: React.FC = () => {
  const [favoritesTeachers, setFavoritesTeachers] = useState([]);

  const loadFavoriteTeachers = () => {
    AsyncStorage.getItem('favoriteTeachers').then((teacher) => {
      if (teacher) {
        const favoritedTeachers = JSON.parse(teacher);
        setFavoritesTeachers(favoritedTeachers);
      }
    });
  };

  useFocusEffect(
    useCallback(() => {
      loadFavoriteTeachers();
    }, [])
  );

  return (
    <View style={styles.wrapper}>
      <Header title="Meus Proffys favoritos" />
      <ScrollView
        style={styles.favoriteItem}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}>
        {favoritesTeachers.map((teacher: ITeacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} favorited />
        ))}
      </ScrollView>
    </View>
  );
};

export default Favorites;
