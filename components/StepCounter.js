// components/StepCounter.js
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Accelerometer } from 'expo-sensors';

const StepCounter = () => {
  const [steps, setSteps] = useState(0);
  const [data, setData] = useState({ x: 0, y: 0, z: 0 });

  // Включаем акселерометр при загрузке компонента
  useEffect(() => {
    const subscription = Accelerometer.addListener(accelerometerData => {
      setData(accelerometerData);
    });
    return () => subscription && subscription.remove();
  }, []);

  // Обновление количества шагов
  const handleAddStep = () => setSteps(steps + 1);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Step Counter</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Шаги: {steps}</Text>
        <Text style={styles.infoText}>Данные акселерометра:</Text>
        <Text style={styles.dataText}>X: {data.x.toFixed(2)}</Text>
        <Text style={styles.dataText}>Y: {data.y.toFixed(2)}</Text>
        <Text style={styles.dataText}>Z: {data.z.toFixed(2)}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleAddStep}>
        <Text style={styles.buttonText}>Добавить шаг</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StepCounter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  infoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  infoText: {
    fontSize: 18,
    color: '#555',
    marginBottom: 5,
  },
  dataText: {
    fontSize: 16,
    color: '#888',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
