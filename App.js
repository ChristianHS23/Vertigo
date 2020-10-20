import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { Deck } from './src/components';

const DATA = [
  {
    title: 'Card1',
    uri:
      'https://tokitobashi.com/wp-content/uploads/2018/05/Beautiful-Chinese-Woman-000002-1.jpg',
  },
  {
    title: 'Card2',
    uri:
      'https://i.pinimg.com/originals/c2/69/62/c26962d8d78d7f31ab9096dc52d926d4.jpg',
  },
  {
    title: 'Card3',
    uri:
      'https://tokitobashi.com/wp-content/uploads/2018/06/Beautiful-Chinese-Woman-000004-1.jpg',
  },
  {
    title: 'Card4',
    uri:
      'https://tokitobashi.com/wp-content/uploads/2018/05/Beautiful-Chinese-Woman-000003-1.jpg',
  },
  {
    title: 'Card5',
    uri:
      'https://tokitobashi.com/wp-content/uploads/2018/05/Beautiful-Chinese-Woman-000003-2.jpg',
  },
  {
    title: 'Card6',
    uri:
      'https://tokitobashi.com/wp-content/uploads/2018/05/Beautiful-Chinese-Woman-000003-4.jpg',
  },
  {
    title: 'Card7',
    uri:
      'https://tokitobashi.com/wp-content/uploads/2018/05/Beautiful-Chinese-Woman-000001-6.jpg',
  },
  {
    title: 'Card8',
    uri:
      'https://i.pinimg.com/736x/2e/cd/70/2ecd70a0fda5c9439c436fbad5d68a4a.jpg',
  },
];

const renderCardMain = (item) => <Text>{item.title}</Text>;

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='dark' />
      <SafeAreaView>
        <Deck data={DATA} renderCard={renderCardMain} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    // justifyContent: 'center',
  },
});
