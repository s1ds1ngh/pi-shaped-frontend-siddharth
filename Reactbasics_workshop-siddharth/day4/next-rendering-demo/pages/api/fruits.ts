import type { NextApiRequest, NextApiResponse } from 'next';

type Fruit = {
  id: number;
  name: string;
  color: string;
  taste: string;
};

type Data = {
  fruits: Fruit[];
};

// This is our mock database of fruits
const fruits: Fruit[] = [
  { id: 1, name: 'Apple', color: 'Red', taste: 'Sweet and Crisp' },
  { id: 2, name: 'Banana', color: 'Yellow', taste: 'Sweet' },
  { id: 3, name: 'Orange', color: 'Orange', taste: 'Sweet and Tangy' },
  { id: 4, name: 'Strawberry', color: 'Red', taste: 'Sweet and Juicy' },
  { id: 5, name: 'Blueberry', color: 'Blue', taste: 'Sweet and Mild' },
  { id: 6, name: 'Mango', color: 'Yellow/Orange', taste: 'Sweet and Tropical' },
  { id: 7, name: 'Pineapple', color: 'Yellow', taste: 'Sweet and Tangy' },
  { id: 8, name: 'Watermelon', color: 'Green/Red', taste: 'Sweet and Refreshing' },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Simulate a small delay to demonstrate loading states
  setTimeout(() => {
    res.status(200).json({ fruits });
  }, 500);
}