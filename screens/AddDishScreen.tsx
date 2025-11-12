import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { MenuItem } from '../types';
import { validateMenuItem } from '../utils/menuCalculations';

type Props = NativeStackScreenProps<RootStackParamList, 'AddDish'> & {
  setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>>;
};

export default function AddDishScreen({ navigation, setMenuItems }: Props) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState<'Starter' | 'Main' | 'Dessert'>('Starter');
  const [price, setPrice] = useState('');

  const handleAddDish = () => {
    const error = validateMenuItem(name, description, price);
    if (error) return Alert.alert('Error', error);

    const newDish: MenuItem = {
      id: Date.now().toString(),
      name,
      description,
      course,
      price: parseFloat(price),
    };

    setMenuItems(prev => [...prev, newDish]);
    Alert.alert('✅ Success', `${name} added successfully!`);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>➕ Add New Dish</Text>

      {/* Dish Name */}
      <Text style={styles.label}>Dish Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter dish name"
        value={name}
        onChangeText={setName}
      />

      {/* Description */}
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={[styles.input, { height: 80 }]}
        placeholder="Enter description"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      {/* Course Picker */}
      <Text style={styles.label}>Select Course</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={course}
          onValueChange={(itemValue) =>
            setCourse(itemValue as 'Starter' | 'Main' | 'Dessert')
          }>
          <Picker.Item label="Starter" value="Starter" />
          <Picker.Item label="Main" value="Main" />
          <Picker.Item label="Dessert" value="Dessert" />
        </Picker>
      </View>

      {/* Price */}
      <Text style={styles.label}>Price (R)</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={handleAddDish}>
        <Text style={styles.buttonText}>Add Dish</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff8f0',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2c3e50',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 16,
    overflow: 'hidden',
  },
  button: {
    backgroundColor: '#27ae60',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
