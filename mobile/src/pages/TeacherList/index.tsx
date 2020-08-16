import { Feather } from '@expo/vector-icons';

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, AsyncStorage } from 'react-native';
import {
  ScrollView,
  TextInput,
  BorderlessButton,
  RectButton,
} from 'react-native-gesture-handler';

import Header from '../../components/Header/index';
import TeacherItem, { ITeacher } from '../../components/TeacherItem';
import API from '../../services/API';
import styles from './styles';

const TeacherList: React.FC = () => {
  const [isVisibleSearch, setIsVisibleSearch] = useState(false);
  const [subject, setSubject] = useState('');
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  const handleToggleVisibleSearch = () => {
    setIsVisibleSearch(!isVisibleSearch);
  };

  const loadFavorites = () => {
    AsyncStorage.getItem('favoriteTeachers').then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map(
          (teacher: ITeacher) => {
            return teacher.id;
          }
        );
        setFavorites(favoritedTeachersIds);
      }
    });
  };

  // eslint-disable-next-line complexity
  const handleSubmit = async () => {
    loadFavorites();
    if (!subject || !day || !time) return;
    const response = await API.get('classes', {
      params: {
        week_day: day,
        subject,
        time,
      },
    });
    setIsVisibleSearch(false);
    setTeachers(response.data);
  };

  return (
    <View style={styles.wrapper}>
      <Header
        title="Proffys disponíveis"
        isVisibleSearchButton={
          <BorderlessButton onPress={handleToggleVisibleSearch}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        }>
        {isVisibleSearch && (
          <View style={styles.searchFormContainer}>
            <Text style={styles.searchFormBlockLabel}>Matéria</Text>
            <TextInput
              value={subject}
              onChangeText={(text) => setSubject(text)}
              placeholderTextColor="#c1bccc"
              style={[styles.searchFormInput, styles.searchFormBlockInput]}
              placeholder="Qual a matéria ?"
            />
            <View style={styles.searchFormInternContainer}>
              <View style={styles.searchFormBlock}>
                <Text style={styles.searchFormBlockLabel}>Dia da semana</Text>
                <TextInput
                  value={day}
                  onChangeText={(text) => setDay(text)}
                  placeholderTextColor="#c1bccc"
                  style={styles.searchFormBlockInput}
                  placeholder="Qual o dia ?"
                />
              </View>
              <View style={styles.searchFormBlock}>
                <Text style={styles.searchFormBlockLabel}>Horário</Text>
                <TextInput
                  value={time}
                  onChangeText={(text) => setTime(text)}
                  placeholderTextColor="#c1bccc"
                  style={styles.searchFormBlockInput}
                  placeholder="Qual o horário ?"
                />
              </View>
            </View>
            <RectButton
              onPress={handleSubmit}
              style={styles.searchButtonSubmit}>
              <Text style={styles.searchButtonSubmitText}>Pesquisar</Text>
            </RectButton>
          </View>
        )}
      </Header>
      <ScrollView
        style={[styles.teacherItemScroll]}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}>
        {teachers.map((teacher) => (
          <TeacherItem
            key={teacher.id}
            teacher={teacher}
            favorited={favorites.includes(teacher.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default TeacherList;
