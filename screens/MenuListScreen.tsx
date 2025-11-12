import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { MenuItem } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'MenuList'> & {
  menuItems: MenuItem[];
  setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>>;
};

export default function MenuListScreen({ menuItems, setMenuItems }: Props) {
  const handleDelete = (id: string) => {
    Alert.alert('Confirm', 'Delete this dish?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () =>
          setMenuItems(prevMenuItems => prevMenuItems.filter(item => item.id !== id)), // ✅ Use functional update
      },
    ]);
  };

  return (
    <View style={styles.container}>
      {menuItems.length === 0 ? (
        <Text style={styles.empty}>No dishes available.</Text>
      ) : (
        <FlatList
          data={menuItems}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.name}>{item.name}</Text>
              <Text>{item.description}</Text>
              <Text>Course: {item.course}</Text>
              <Text>Price: R {item.price.toFixed(2)}</Text>
              <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.deleteButton}>
                <Text style={styles.deleteText}>🗑️ Remove</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff8f0' },
  card: { backgroundColor: '#fff', padding: 15, marginBottom: 10, borderRadius: 8, elevation: 2 },
  name: { fontWeight: 'bold', fontSize: 16 },
  deleteButton: { backgroundColor: '#e74c3c', padding: 8, borderRadius: 6, marginTop: 8, alignItems: 'center' },
  deleteText: { color: '#fff' },
  empty: { textAlign: 'center', marginTop: 40, fontSize: 16 },
});
