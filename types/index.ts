export type MenuItem = {
  id: string;
  name: string;
  description: string;
  course: 'Starter' | 'Main' | 'Dessert';
  price: number;
};
