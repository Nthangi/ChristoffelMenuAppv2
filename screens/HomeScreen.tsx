import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type MenuItem = {
  id: string;
  name: string;
  description: string;
  course: 'Starter' | 'Main' | 'Dessert';
  price: number;
};

type Props = {
  navigation: any;
  menuItems: MenuItem[];
};

export default function HomeScreen({ navigation, menuItems }: Props) {
  const getAveragePrice = (course: string) => {
    const items = menuItems.filter(item => item.course === course);
    if (items.length === 0) return '0.00';
    const total = items.reduce((sum, item) => sum + item.price, 0);
    return (total / items.length).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>👨‍🍳 Christoffel's Menu</Text>
      <Text style={styles.subtitle}>Restaurant Management App</Text>
      
      <View style={styles.statsContainer}>
        <Text style={styles.statText}>Total Items: {menuItems.length}</Text>
        <Text style={styles.statText}>Starters Avg: R {getAveragePrice('Starter')}</Text>
        <Text style={styles.statText}>Mains Avg: R {getAveragePrice('Main')}</Text>
        <Text style={styles.statText}>Desserts Avg: R {getAveragePrice('Dessert')}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddDish')}>
        <Text style={styles.buttonText}>➕ Add New Dish</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.secondaryButton]} onPress={() => navigation.navigate('MenuList')}>
        <Text style={styles.buttonText}>📋 View Menu Items</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff8f0',
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2c3e50',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#7f8c8d',
    marginBottom: 40,
  },
  statsContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#2c3e50',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
  },
  secondaryButton: {
    backgroundColor: '#2ecc71',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});