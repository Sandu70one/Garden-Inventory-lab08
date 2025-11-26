import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// 3. Apply bootstrap CSS import
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import type { Plant } from './type'

// 1. Create an array containing at least 3 plant objects
const samplePlants: Plant[] = [
  {
    id: 1,
    name: 'Monstera Deliciosa',
    scientific: 'Monstera deliciosa',
    difficulty: 'Easy',
    light: 'Medium',
    water: 'Moderate',
    rarity: 'Common',
    description: 'A popular tropical plant with holey leaves, often called the Swiss Cheese Plant.'
  },
  {
    id: 2,
    name: 'Fiddle Leaf Fig',
    scientific: 'Ficus lyrata',
    difficulty: 'Hard',
    light: 'Bright',
    water: 'Moderate',
    rarity: 'Uncommon',
    description: 'Known for its large, violin-shaped leaves. Needs consistent care.'
  },
  {
    id: 3,
    name: 'Snake Plant',
    scientific: 'Sansevieria trifasciata',
    difficulty: 'Easy',
    light: 'Low',
    water: 'Low',
    rarity: 'Common',
    description: 'An architectural plant with upright leaves. Extremely hardy and air-purifying.'
  }
];

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* 2. Pass this array to the App component via props */}
    <App plants={samplePlants} />
  </React.StrictMode>,
)