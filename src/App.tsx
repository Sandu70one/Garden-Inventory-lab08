import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import PlantList from './components/PlantList';
import PlantCard from './components/PlantCard';
import PlantForm from './components/PlantForm';
import PeopleDropdown from './components/PeopleDropdown';
import { Plant } from './types/Plant';

function App() {
  const [plants, setPlants] = useState<Plant[]>([
    {
      id: 1,
      name: 'Snake Plant',
      scientificName: 'Sansevieria trifasciata',
      difficulty: 'Easy',
      light: 'Low',
      water: 'Low',
      rarity: 'Common',
      description: 'A hardy, low-maintenance plant that thrives in low light and requires minimal watering.',
    },
    {
      id: 2,
      name: 'Monstera',
      scientificName: 'Monstera deliciosa',
      difficulty: 'Medium',
      light: 'Bright',
      water: 'Medium',
      rarity: 'Common',
      description: 'A popular tropical plant with large, fenestrated leaves. Requires bright indirect light.',
    },
    {
      id: 3,
      name: 'Fiddle Leaf Fig',
      scientificName: 'Ficus lyrata',
      difficulty: 'Hard',
      light: 'Bright',
      water: 'Medium',
      rarity: 'Uncommon',
      description: 'A stunning plant with large, violin-shaped leaves. Can be finicky and requires consistent care.',
    },
  ]);

  const [selectedPlantId, setSelectedPlantId] = useState<number | null>(null);
  const [searchText, setSearchText] = useState<string>('');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('All');

  // Handle adding a new plant
  const handleAdd = (newPlant: Omit<Plant, 'id'>) => {
    const plant: Plant = {
      ...newPlant,
      id: plants.length > 0 ? Math.max(...plants.map((p) => p.id)) + 1 : 1,
    };
    setPlants([...plants, plant]);
  };

  // Handle deleting a plant
  const handleDelete = (id: number) => {
    setPlants(plants.filter((plant) => plant.id !== id));
    if (selectedPlantId === id) {
      setSelectedPlantId(null);
    }
  };

  // Filter plants based on search text AND difficulty using useMemo
  const filteredPlants = useMemo(() => {
    return plants.filter((plant) => {
      const matchesSearch =
        plant.name.toLowerCase().includes(searchText.toLowerCase()) ||
        plant.scientificName.toLowerCase().includes(searchText.toLowerCase());

      const matchesDifficulty =
        difficultyFilter === 'All' || plant.difficulty === difficultyFilter;

      return matchesSearch && matchesDifficulty;
    });
  }, [plants, searchText, difficultyFilter]);

  // Get selected plant
  const selectedPlant = plants.find((plant) => plant.id === selectedPlantId);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Banner>Welcome to the Mini Nursery
        
      </Banner>
      

      <div className="container flex-grow-1 mb-4">
        <div className="row">
          {/* Left Column */}
          <div className="col-md-6">
            {/* Search Input */}
            <div className="mb-3">
              <label htmlFor="searchInput" className="form-label">
                Search Plants
              </label>
              <input
                type="text"
                className="form-control"
                id="searchInput"
                placeholder="Search by name or scientific name..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>

            {/* Difficulty Filter */}
            <div className="mb-3">
              <label htmlFor="difficultyFilter" className="form-label">
                Filter by Difficulty
              </label>
              <select
                className="form-select"
                id="difficultyFilter"
                value={difficultyFilter}
                onChange={(e) => setDifficultyFilter(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>

            {/* Plant List */}
            <div className="mb-3">
              <h5>Plants ({filteredPlants.length})</h5>
              <PlantList
                plants={filteredPlants}
                selectedId={selectedPlantId}
                onSelect={setSelectedPlantId}
              />
            </div>

            {/* People Dropdown */}
            <PeopleDropdown />
          </div>

          {/* Right Column */}
          <div className="col-md-6">
            {/* Plant Form */}
            <div className="mb-4">
              <PlantForm onAdd={handleAdd} />
            </div>

            {/* Selected Plant Card */}
            {selectedPlant && (
              <div>
                <h5>Selected Plant</h5>
                <PlantCard plant={selectedPlant} onDelete={handleDelete} />
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;