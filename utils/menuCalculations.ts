import { MenuItem } from '../types';

export const calculateAveragePrice = (menuItems: MenuItem[], course: string): string => {
  const items = menuItems.filter(item => item.course === course);
  if (items.length === 0) return '0.00';
  const total = items.reduce((sum, item) => sum + item.price, 0);
  return (total / items.length).toFixed(2);
};

export const filterByCourse = (
  menuItems: MenuItem[],
  course: 'All' | 'Starter' | 'Main' | 'Dessert'
): MenuItem[] => {
  if (course === 'All') return menuItems;
  return menuItems.filter(item => item.course === course);
};

export const validateMenuItem = (name: string, description: string, price: string): string | null => {
  if (!name.trim()) return 'Please enter a dish name';
  if (!description.trim()) return 'Please enter a description';
  if (!price.trim() || isNaN(parseFloat(price)) || parseFloat(price) <= 0) return 'Please enter a valid price';
  return null;
};
