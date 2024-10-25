// screens/ActivityScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ActivityScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Добро пожаловать в трекер активности!</Text>
      <Button 
        title="Начать отслеживание" 
        onPress={() => alert("Отслеживание начато!")} 
        color="#4CAF50"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default ActivityScreen;
