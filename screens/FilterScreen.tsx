import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { MenuItem } from '../types';
import { filterByCourse } from '../utils/menuCalculations';

type Props = NativeStackScreenProps<RootStackParamList, 'Filter'> & {
  menuItems: MenuItem[];
};

export default function FilterScreen({ menuItems }: Props) {
  const [selectedCourse, setSelectedCourse] = useState<'All' | 'Starter' | 'Main' | 'Dessert'>('All');
  const filteredItems = filterByCourse(menuItems, selectedCourse);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Filter by Course</Text>

      <View style={styles.buttonsRow}>
        {['All', 'Starter', 'Main', 'Dessert'].map((course) => (
          <TouchableOpacity
            key={course}
            style={[styles.button, selectedCourse === course && styles.active]}
            onPress={() => setSelectedCourse(course as any)}
          >
            <Text style={styles.buttonText}>{course}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>R {item.price.toFixed(2)}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff8f0', padding: 20 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
  buttonsRow: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 },
  button: { backgroundColor: '#bdc3c7', padding: 10, borderRadius: 8 },
  active: { backgroundColor: '#9b59b6' },
  buttonText: { color: 'white', fontWeight: 'bold' },
  card: { backgroundColor: '#fff', padding: 12, marginBottom: 8, borderRadius: 6, elevation: 2 },
  name: { fontWeight: 'bold', fontSize: 16 },
});
